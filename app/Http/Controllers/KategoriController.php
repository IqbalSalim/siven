<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use App\Http\Requests\StoreKategoriRequest;
use App\Http\Requests\UpdateKategoriRequest;
use App\Http\Resources\KategoriResource;

class KategoriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Kategori::query();
        if (request('name')) {
            $query->where('nama_kategori', 'like', '%' . request('name') . '%');
        }
        $kategori = $query->paginate(10)->onEachSide(1);
        return inertia('Kategori/Index', [
            'kategori' => KategoriResource::collection($kategori),
            'queryParams' => request()->query() ?: null,
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Kategori/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreKategoriRequest $request)
    {
        $data = $request->validated();
        Kategori::create($data);

        return to_route('kategori.index')->with('success', 'Kategori berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Kategori $kategori)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Kategori $kategori)
    {
        return inertia('Kategori/Edit', [
            'kategori' => new KategoriResource($kategori),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateKategoriRequest $request, Kategori $kategori)
    {
        $data = $request->validated();
        $kategori->update($data);

        return to_route('kategori.index')
            ->with('success', "Kategori \"$kategori->nama_kategori\" berhasil diubah");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kategori $kategori)
    {
        $name = $kategori->nama_kategori;
        $kategori->delete();
        return to_route('kategori.index')->with('success', "Kategori \"$name\" berhasil dihapus");
    }
}
