<?php

namespace App\Http\Controllers\Trader;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class SettingsController extends Controller
{
    function index()
    {
        return view('dashboard.user.settings');
    }

    function changePassword(Request $request)
    {
        $request->validate([
            'password'=>'required|confirmed',
            'old_password'=>'required'
        ]);

        if(!Hash::check($request->old_password,Auth::user()->password))
        {
            return back()->with(['message'=>'invalide password','type'=>'warning']);
        }

        $user = User::where('id',Auth::user()->id)->first();

        $user->password = Hash::make($request->password);

        $user->save();

        return back()->with(['message'=>'Password Updated successfully','type'=>'success']);

    }

    function changePic(Request $request)
    {
        $request->validate([
            'profile_photo'=>'required|max:2048|image'
        ]);

        $file = $request->file('profile_photo');

        $new_name = mt_rand(1111,9999)."_pics.".$file->getClientOriginalExtension();

        $file->move(public_path('images'),$new_name);

        $user = User::where('id',Auth::user()->id)->first();

        $user->pics = $new_name;

        $user->save();

        return back()->with(['message'=>'Profile Picture updated successfully','type'=>'success']);
    }
}
