<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class upgradeController extends Controller
{
    function index()
    {
        return view('dashboard.user.upgrade');
    }

    function store(Request $request)
    {
        return redirect()->route('payment',"upgrade");
    }
}
