<?php

namespace App\Http\Controllers\Trader;

use App\Http\Controllers\Controller;
use App\Models\Trade;
use App\Models\Wallet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TradeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['trades'] = Trade::where('user_id',Auth::user()->id)->get();

        return view('dashboard.user.trades',$data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('dashboard.user.make-trade');
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
            'trade_asset'=>'required',
            'trade_amount'=>'required',
            'duration'=>'required',
            'contract'
        ]);

        $wallet = Wallet::where('user_id',Auth::user()->id)->first();

        if($wallet->amount < $request->trade_amount)
        {
            return back()->with(['message'=>'insufficient fund','type'=>'danger']);
        }

        Trade::create([
            'user_id'=>Auth::user()->id,
            'assets'=>$request->trade_asset,
            'amount'=>$request->trade_amount,
            'duration'=>$request->duration,
            'contract'=>$request->contract
        ]);

        return back()->with(['message'=>'your trade is place successfuly','type'=>'success']);
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
