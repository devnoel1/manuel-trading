<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\DepositAddress;
use Illuminate\Http\Request;

class settingsController extends Controller
{
    function index()
    {
        $data['address'] = DepositAddress::where('id', 1)->first();

        return view('admin.settings', $data);
    }

    function depositAddress(Request $request)
    {
        $request->validate([
            'address' => 'required'
        ]);

        DepositAddress::updateOrCreate(['id' => 1],['address' => $request->address]);

        return back()->with(['message' => 'Address updated successfuly', 'type' => 'success']);
    }
}
