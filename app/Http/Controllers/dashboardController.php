<?php

namespace App\Http\Controllers;

use App\Models\Trade;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class dashboardController extends Controller
{
    function index()
    {
        if(Auth::user()->role == "trader")
        {
            return view('dashboard.user.dashboard');
        }else{
            $data['trades'] = Trade::all();

            return view('admin.index',$data);
        }
    }
}
