<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class GaleriResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $galeri = [];
        foreach ($this->resource as $row) {
            array_push(
                $galeri,
                (object)[
                    'id' => $row['id'],
                    'name' => $row['gambar'],
                    'url' => (str_contains($row['gambar'], 'https://')) ? $row['gambar'] : Storage::url($row['gambar']),
                ]
            );
        }
        return $galeri;
    }
}
