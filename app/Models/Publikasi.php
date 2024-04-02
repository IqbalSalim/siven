<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Publikasi extends Model
{
    use HasFactory;

    protected $fillable = [
        'judul',
        'isi',
        'tempat',
        'tanggal_kegiatan',
        'view',
        'status',
    ];

    public function galeri()
    {
        return $this->hasMany(Galeri::class);
    }
    public function publikasi_kategori()
    {
        return $this->hasMany(PublikasiKategori::class);
    }

    public function komentar()
    {
        return $this->hasMany(Komentar::class);
    }

    public function ormawa()
    {
        return $this->belongsTo(Ormawa::class);
    }
}
