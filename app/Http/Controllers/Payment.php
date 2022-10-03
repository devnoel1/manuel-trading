<?php

namespace App\Http\Controllers;

use App\Models\DepositAddress;
use App\Models\DepositeProve;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Payment extends Controller
{
    function index($id)
    {
        $data['address'] = DepositAddress::where('id', 1)->first();

        return view('dashboard.user.address',$data);
    }

    function store(Request $request)
    {
        $request->validate([
            'file'=>'required|image',
        ]);

        if($request->hasFile('file'))
        {
            $file = $request->file('file');
            $new_name = rand(1111,9999).'_'.date('d-m-Y').'.'.$file->getClientOriginalExtension();
            $file->move(public_path('uploads'),$new_name);
        }

        DepositeProve::create([
            'user_id'=>Auth::user()->id,
            'file'=>$new_name,
            'deposit_id'=>$request->deposit_id
        ]);

        return back()->with(['message'=>'uploaded successfuly','type'=>'success']);
    }
}
