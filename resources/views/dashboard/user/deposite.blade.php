@extends('layouts.user')

@section('content')
    <h1 style="text-align:center;">Make Deposit</h1>
    <div style="text-align:center" class="col-md-16 col-lg-16 col-xl-16">
        <div class="card"><br>
            <h2><i class="fa fa-bitcoin"></i></h2>
            <h3 class="card-title" style="color:black"><b> Bitcoin Payment Method</b></h3>

            <form action="{{ route('deposite.store') }}" method="POST">
                @csrf
                <div class="card-body">
                    <div class="form-group row">
                        <label for="exa1" class="col-16 col-form-label" style="text-align:left">Amount <font
                                color="crison">($) *</font></label>
                        <div class="col-16">
                            <input class="form-control" type="number" step="0.01" name="amount" min="10"
                                id="exa1" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-16">
                            <center>
                                <input class="btn btn-outline-primary" type="submit" name="investment"
                                    value="Make Deposit">
                            </center>
                        </div>
                    </div>
            </form>
        </div>
    </div>
    <div style="text-align:center" class="col-md-16 col-lg-16 col-xl-16">
        <div class="card">
            <br>
            <h3 class="card-title" style="color:black"><b>Deposit History</b></h3>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                   <tbody>
                    @forelse ($deposites as $item)
                    <tr>
                        <td>{{ $item->amount }}</td>
                        <td>
                            @php
                                if($item->status == "pending")
                                {
                                    echo '<div class="badge badge-primary">Pending</div>';
                                }else if($item->status =="cancel"){
                                    echo '<div class="badge badge-danger">Canceld</div>';
                                }elseif ($item->status == "approved") {
                                    echo '<div class="badge badge-success">Approved</div>';
                                }
                            @endphp
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="6">
                            <div class="text-center text-danger">
                                You have not made any deposit
                            </div>
                        </td>
                    </tr>
                    @endforelse
                   </tbody>
                </table>
            </div>

        </div>
    @endsection
