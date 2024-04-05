<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Storage;

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
        // dd($this->resource);
        $galeri = [];
        foreach ($this->resource as $row) {
            array_push(
                $galeri,
                (object)[
                    'name' => substr($row['gambar'], 0, 6),
                    'url' => Storage::url($row['gambar']),
                ]
            );
        }
        return $galeri;
    }
}
