<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Trade;
use App\Models\User;
use App\Models\Wallet;
use Illuminate\Http\Request;

class TradeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['trades'] = Trade::all();

        return view('admin.trade.index',$data);
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
        //
    }

    function credit(Request $request,$id)
    {
        $request->validate([
            'amount'=>'required'
        ]);

        $trade = Trade::findOrFail($id);

        $wallet = Wallet::where('user_id',$trade->user_id)->first();

        $wallet->amount = $wallet->amount + $request->amount;

        $wallet->save();

        return back()->with(['message'=>'user wallet credited','type'=>'success']);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data['trade'] = Trade::findOrFail($id);

        return view('admin.trade.show',$data);
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
        $request->validate([
            'trade_status'=>'required'
        ]);

        $trade = Trade::findOrFail($id);

        $trade->status = $request->trade_status;

        $trade->save();

        return back()->with(['message'=>'Status updated successfully','type'=>'success']);

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
