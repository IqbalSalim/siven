<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ormawas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('nama_ormawa');
            $table->string('jabatan');
            $table->string('gambar_profil')->nullable();
            $table->string('gambar_struktur')->nullable();
            $table->longText('tentang_ormawa')->nullable();
            $table->string('link_twitter')->nullable();
            $table->string('link_facebook')->nullable();
            $table->string('link_instagram')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ormawas');
    }
};
