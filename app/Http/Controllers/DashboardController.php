<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use App\Models\Ormawa;
use App\Models\Publikasi;
use Auth;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        // dd(Publikasi::sum('view'));
        $view = Publikasi::query();
        $publikasi = Publikasi::query();
        if (Auth::user()->hasRole('ormawa')) {
            $view->where('ormawa_id', Auth::user()->ormawa->id);
            $publikasi->where('ormawa_id', Auth::user()->ormawa->id);
        }
        return inertia('Dashboard', [
            'view' => $view->sum('view'),
            'publikasi' => $view->count(),
            'kategori' => Kategori::all()->count(),
            'ormawa' => Ormawa::all()->count(),
        ]);
    }
}
