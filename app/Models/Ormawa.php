<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ormawa extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'nama_ormawa',
        'jabatan',
        'gambar_profil',
        'gambar_struktur',
        'tentang_ormawa',
        'link_twitter',
        'link_facebook',
        'link_instagram',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function publikasi()
    {
        return $this->hasMany(Publikasi::class);
    }
}
