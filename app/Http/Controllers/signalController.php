<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class signalController extends Controller
{
    function index()
    {
        return view('dashboard.user.signal');
    }

    function store(Request $request)
    {

        return redirect()->route('payment',"upgrade");
    }
}
