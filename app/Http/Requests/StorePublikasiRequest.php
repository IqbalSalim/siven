<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePublikasiRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "judul" => ["required", "string", "max:255"],
            "isi" => ["required", "string"],
            "tempat" => ["required", "string", "max:255"],
            "tanggal_kegiatan" => ["required"],
            "kategori" => ["required"],
            "status" => ["required"],
            "gambar" => ["required"]
        ];
    }
}
