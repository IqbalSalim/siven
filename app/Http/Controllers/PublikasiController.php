<?php

namespace App\Http\Controllers;

use App\Models\Publikasi;
use App\Http\Requests\StorePublikasiRequest;
use App\Http\Requests\UpdatePublikasiRequest;
use App\Http\Resources\PublikasiResource;
use App\Http\Resources\SelectKategoriResource;
use App\Models\Kategori;

class PublikasiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Publikasi::query();
        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");
        if (request('judul')) {
            $query->where('judul', 'like', '%' . request('judul') . '%');
        }
        if (request("status")) {
            $query->where("status", "like", "%" . request("status") . "%");
        }
        $publikasi = $query->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia('Publikasi/Index', [
            'publikasis' => PublikasiResource::collection($publikasi),
            'queryParams' => request()->query() ?: null,
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Publikasi/Create', [
            'kategoris' => new SelectKategoriResource(Kategori::all())
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePublikasiRequest $request)
    {
        dd($request->kategori);
    }

    /**
     * Display the specified resource.
     */
    public function show(Publikasi $publikasi)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Publikasi $publikasi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePublikasiRequest $request, Publikasi $publikasi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Publikasi $publikasi)
    {
        //
    }
}
