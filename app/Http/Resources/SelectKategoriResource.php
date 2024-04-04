<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SelectKategoriResource extends JsonResource
{
    public static $wrap = false;
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
                    'value' => $row->id,
                    'label' => $row->nama_kategori,
                ]
            );
        }
        return $kategori;
    }
}
