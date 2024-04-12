<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Storage;

class OrmawaResource extends JsonResource
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
            'nama_ormawa' => $this->nama_ormawa,
            'jabatan' => $this->jabatan,
            'gambar_profil' => ($this->gambar_profil) ? Storage::url($this->gambar_profil) : '/assets/images/no-image.png',
            'gambar_struktur' => $this->gambar_struktur,
            'tentang_ormawa' => $this->tentang_ormawa,
            'link_twitter' => $this->link_twitter,
            'link_instagram' => $this->link_instagram,
            'link_facebook' => $this->link_facebook,
        ];
    }
}
