<?php

namespace App\Http\Controllers\Trader;

use App\Http\Controllers\Controller;
use App\Models\Wallet;
use App\Models\Withdrawal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WithdrawalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['withdrawals'] = Withdrawal::where('user_id',Auth::user()->id)->get();

        return view('dashboard.user.withdrawal',$data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'amount'=>'required',
            'withdrawal_method'=>'required',
            'withdrawal_details'=>'required'
        ]);

        $Wallet = Wallet::where('user_id',Auth::user()->id)->first();

        if($Wallet->amount < $request->amount)
        {
            return back()->with(['message'=>'insufficient fund','type'=>'danger']);
        }

        Withdrawal::create([
            'user_id'=>Auth::user()->id,
            'amount'=>$request->amount,
            'method'=>$request->withdrawal_method,
            'details'=>$request->withdrawal_details
        ]);

        $Wallet->amount = $Wallet->amount - $request->amount;

        $Wallet->save();


        return back()->with(['message'=>'Request places successfuly','type'=>'success']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
