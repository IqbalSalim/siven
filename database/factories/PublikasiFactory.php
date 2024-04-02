<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Publikasi>
 */
class PublikasiFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'ormawa_id' => 1,
            'judul' => fake()->sentence(),
            'isi' => fake()->realText(),
            'tempat' => fake()->word(),
            'tanggal_kegiatan' => fake()->dateTime(),
            'status' => fake()->randomElement(['Draft', 'Published', 'Archived']),
            'created_at' => time(),
            'updated_at' => time(),
        ];
    }
}
