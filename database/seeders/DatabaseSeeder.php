<?php

namespace Database\Seeders;

use App\Models\Kategori;
use App\Models\Ormawa;
use App\Models\Publikasi;
use App\Models\PublikasiKategori;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Role::create(['name' => 'admin']);
        Role::create(['name' => 'ormawa']);
        for ($i = 0; $i < 5; $i++) {
            $user = User::factory()->create();
            $user->assignRole('ormawa');
            Ormawa::create([
                'user_id' => $user->id,
                'nama_ormawa' => fake()->name(),
                'jabatan' => fake()->name()
            ]);
        }

        $user = User::factory()->create();
        $user->assignRole('admin');

        Publikasi::factory()->count(10)->hasGaleri(10)->create();

        $array_kategori = ['Edukasi', 'Sosialisasi', 'Pelatihan', 'Pengembangan', 'Hiburan', 'Lomba', 'Penelitian', 'Olahraga'];
        for ($i = 0; $i < count($array_kategori); $i++) {
            Kategori::create([
                'nama_kategori' => $array_kategori[$i]
            ]);
        }

        for ($i = 1; $i <= 10; $i++) {
            for ($j = 0; $j <= 5; $j++) {
                PublikasiKategori::create([
                    'publikasi_id' => $i,
                    'kategori_id' => fake()->randomElement([1, 2, 3, 4, 5, 6])
                ]);
            }
        }
    }
}
