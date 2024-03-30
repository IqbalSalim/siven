<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Http\Resources\UserResource;
use App\Models\Ormawa;
use App\Models\User;
use Exception;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;


class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $user = User::find(Auth::user()->id);

        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'user' => new UserResource($user)
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }
        $gambar_profil = $request->gambar_profil ?? null;
        $gambar_struktur = $request->gambar_struktur ?? null;
        $ormawa = Ormawa::where('user_id', $request->user()->id)->first();

        if ($gambar_profil) {
            if ($ormawa->gambar_profil) {
                Storage::disk('public')->deleteDirectory(dirname($ormawa->gambar_profil));
            }
            $gambar_profil = $gambar_profil->store('ormawa/' . Str::random(), 'public');
        } else {
            $gambar_profil = $ormawa->gambar_profil;
        }

        if ($gambar_struktur) {
            if ($ormawa->gambar_struktur) {
                Storage::disk('public')->deleteDirectory(dirname($ormawa->gambar_struktur));
            }
            $gambar_struktur = $gambar_struktur->store('struktur/' . Str::random(), 'public');
        } else {
            $gambar_struktur = $ormawa->gambar_struktur;
        }

        try {
            $request->user()->save();
            $ormawa = Ormawa::where('user_id', $request->user()->id)->first();
            $ormawa->update([
                'nama_ormawa' => $request->nama_ormawa,
                'jabatan' => $request->jabatan,
                'link_twitter' => $request->link_twitter,
                'link_facebook' => $request->link_facebook,
                'link_instagram' => $request->link_instagram,
                'gambar_profil' => $gambar_profil,
                'gambar_struktur' => $gambar_struktur,
                'tentang_ormawa' => $request->tentang_ormawa,
            ]);
        } catch (Exception $e) {
            dd($e);
        }


        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
