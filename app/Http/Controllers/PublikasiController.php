<?php

namespace App\Http\Controllers;

use App\Models\Publikasi;
use App\Http\Requests\StorePublikasiRequest;
use App\Http\Requests\UpdatePublikasiRequest;
use App\Http\Resources\PublikasiResource;
use App\Http\Resources\SelectKategoriResource;
use App\Models\Galeri;
use App\Models\Kategori;
use App\Models\PublikasiKategori;
use DB;
use Exception;
use Storage;
use Str;

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
            'kategoris' => new SelectKategoriResource(Kategori::get())
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePublikasiRequest $request)
    {
        // dd($request->gambar);
        $data = $request->validated();
        try {
            DB::beginTransaction();
            $data['ormawa_id'] = auth()->user()->ormawa->id;
            $publikasi = Publikasi::create($data);

            foreach ($request->kategori as $row) {

                PublikasiKategori::create([
                    'publikasi_id' => $publikasi->id,
                    'kategori_id' => $row['value']
                ]);
            }

            foreach ($request->gambar as $row) {
                $gambar = $row['file']->store('galeri', 'public');
                Galeri::create([
                    'publikasi_id' => $publikasi->id,
                    'gambar' => $gambar
                ]);
            }

            DB::commit();
        } catch (Exception $e) {
            DB::rollback();
            dd($e->getMessage());
        }

        return to_route('publikasi.index')
            ->with('success', 'Publikasi berhasil ditambahkan');
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
        return inertia('Publikasi/Edit', [
            'publikasi' => new PublikasiResource($publikasi),
            'kategoris' => new SelectKategoriResource(Kategori::get()),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePublikasiRequest $request, Publikasi $publikasi)
    {
        $data = $request->validated();
        try {
            DB::beginTransaction();
            $publikasi->update($data);
            PublikasiKategori::where('publikasi_id', $publikasi->id)->delete();
            foreach ($request->kategori as $row) {
                PublikasiKategori::create([
                    'publikasi_id' => $publikasi->id,
                    'kategori_id' => $row['value']
                ]);
            }
            if ($request->hapusGambar !== null) {
                foreach ($request->hapusGambar as $row) {
                    Galeri::where('id', $row['id'])->delete();
                    if (Storage::disk('public')->exists($row['name'])) {
                        Storage::disk('public')->delete($row['name']);
                    }
                }
            }

            foreach ($request->gambar as $row) {
                if ($row['id'] === null) {
                    $gambar = $row['file']->store('galeri', 'public');
                    Galeri::create([
                        'publikasi_id' => $publikasi->id,
                        'gambar' => $gambar
                    ]);
                }
            }

            DB::commit();
        } catch (Exception $e) {
            DB::rollback();
            dd($e->getMessage());
        }

        return to_route('publikasi.index')
            ->with('success', "Publikasi \"$publikasi->judul\" berhasil diubah");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Publikasi $publikasi)
    {
        $name = $publikasi->judul;
        $publikasi->delete();
        return to_route('publikasi.index')->with('success', "Publikasi \"$name\" berhasil dihapus");
    }
}
