<?php

namespace App\Http\Controllers;

use App\Http\Resources\LandingResource;
use App\Http\Resources\PublikasiResource;
use App\Http\Resources\SelectKategoriResource;
use App\Models\Kategori;
use App\Models\Publikasi;
use Illuminate\Http\Request;
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
        if (request("kategori")) {
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
            'kategoris' => new SelectKategoriResource(Kategori::get()),
            'publikasis' => LandingResource::collection($publikasi),
            'queryParams' => request()->query() ?: null,
        ]);
    }
}
