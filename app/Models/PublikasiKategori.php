<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PublikasiKategori extends Model
{
    use HasFactory;

    protected $fillable = ['publikasi_id', 'kategori_id'];

    public function publikasi()
    {
        return $this->belongsTo(Publikasi::class, 'publikasi_id');
    }

    public function kategori()
    {
        return $this->belongsTo(Kategori::class, 'kategori_id');
    }
}
