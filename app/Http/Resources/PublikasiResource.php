<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PublikasiResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'judul' => $this->judul,
            'isi' => $this->isi,
            'tempat' => $this->tempat,
            'tanggal_kegiatan' => $this->tanggal_kegiatan,
            'view' => $this->view,
            'status' => $this->status,
            'publikasi_kategori' => new PublikasiKategoriResource($this->publikasi_kategori),
        ];
    }
}
