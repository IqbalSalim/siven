<?php

namespace App\Http\Controllers;

use App\Http\Resources\DetailPublikasiResource;
use App\Http\Resources\LandingKategori;
use App\Http\Resources\LandingResource;
use App\Models\Kategori;
use App\Models\Publikasi;
use Route;

class LandingController extends Controller
{
    public function index()
    {
        $query = Publikasi::query();
        $query->where('status', 'published');
        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");
        if (request('judul')) {
            $query->where('judul', 'like', '%' . request('judul') . '%');
        }
        if (request("kategori") && request('kategori')['value'] !== "0") {
            $query->whereHas('publikasi_kategori', function ($query) {
                $query->where("kategori_id", (int)request('kategori')['value']);
            });
        }
        $publikasi = $query->orderBy($sortField, $sortDirection)
            ->paginate(8)
            ->onEachSide(1);
        return inertia('Landing', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'kategoris' => new LandingKategori(Kategori::get()),
            'publikasis' => LandingResource::collection($publikasi),
            'queryParams' => request()->query() ?: null,
        ]);
    }

    public function show(Publikasi $publikasi)
    {
        $publikasi->update([
            'view' => $publikasi->view += 1
        ]);
        return inertia('Detail', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'publikasi' => new DetailPublikasiResource($publikasi),
            'kategoris' => new LandingKategori(Kategori::get()),
        ]);
    }
}
