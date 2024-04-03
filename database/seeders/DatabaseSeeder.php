<?php

namespace Database\Seeders;

use App\Models\Kategori;
use App\Models\Ormawa;
use App\Models\Publikasi;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        for ($i = 0; $i < 5; $i++) {
            $user = User::factory()->create();
            Ormawa::create([
                'user_id' => $user->id,
                'nama_ormawa' => fake()->name(),
                'jabatan' => fake()->name()
            ]);
        }

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        Publikasi::factory()->count(10)->hasGaleri(10)->create();

        $array_kategori = ['Edukasi', 'Sosialisasi', 'Pelatihan', 'Pengembangan', 'Hiburan', 'Lomba', 'Penelitian', 'Olahraga'];
        for ($i = 0; $i < count($array_kategori); $i++) {
            Kategori::create([
                'nama_kategori' => $array_kategori[$i]
            ]);
        }

        // for($i=0; $i<10; $i++){

        // }
    }
}
