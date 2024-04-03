<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SelectKategoriResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [];
        // $kategori = [];
        // $myObj = {};
        // foreach ($this->resource as $row) {
        //     $myObj = {
        //         value: $row->id,
        //         label: $row->nama_kategori,
        //     };
        //     array_push(
        //         $kategori, $myObj
        //     );
        // }

        // return $kategori;
    }
}
