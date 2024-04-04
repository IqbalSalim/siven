<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PublikasiKategoriResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $kategori = [];
        foreach ($this->resource as $row) {
            array_push(
                $kategori,
                (object)[
                    'value' => $row->kategori_id,
                    'label' => $row->kategori->nama_kategori,
                ]
            );
        }
        return $kategori;
    }
}
