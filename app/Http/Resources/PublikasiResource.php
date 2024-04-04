<?php

namespace App\Http\Resources;

use Carbon\Carbon;
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
            'id' => $this->id,
            'judul' => $this->judul,
            'isi' => $this->isi,
            'tempat' => $this->tempat,
            'tanggal_kegiatan' => (new Carbon($this->tanggal_kegiatan))->format('Y-m-d'),
            'view' => $this->view,
            'status' => $this->status,
            'kategori' => new PublikasiKategoriResource($this->publikasi_kategori),
        ];
    }
}
