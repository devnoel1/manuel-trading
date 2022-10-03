@extends('layouts.user')

@section('content')
    <h1 style="text-align:center;">Make Withdrawal</h1>
    <div style="float:center" class="row">
        <div class="col-sm-16 col-md-16">
            <div class="card">
                <div class="card-header">
                    <span>
                        <h3 style="color:crimson;text-align:center"></h3>
                    </span>
                </div>
                <form action="{{ route('withdrawal.store') }}" method="POST">
                    @csrf
                    <div class="card-body">

                        <div class="form-group row">
                            <label class="col-16 col-form-label">Withdrawal Method <font color="crimson">*</font></label>
                            <div class="col-16">
                                <select class="form-control" name="withdrawal_method" required>
                                    <option value="BITCOIN">BITCOIN</option>
                                    <option value="USDT">USDT</option>
                                    <option value="PAYPAL">PAYPAL</option>
                                    <option value="STELLER">STELLER</option>
                                    <option value="WESTERN UNION">WESTERN UNION</option>
                                    <option value="BITCOIN CASH">BITCOIN CASH</option>
                                    <option value="ETHEREUM">ETHEREUM</option>
                                    <option value="LITECOIN">LITECOIN</option>
                                    <option value="SKRILL">SKRILL</option>
                                    <option value="MONEY GRAM">MONEY GRAM</option>
                                    <option value="BANK TRANSFER">BANK TRANSFER</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-16 col-form-label">Method Details <font color="crimson">*</font></label>
                            <div class="col-16">
                                <textarea class="form-control" name="withdrawal_details" rows="5"
                                    placeholder="Enter you selected withdrawal details here..." required></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="example-number-input" class="col-16 col-form-label">Amount ($)<font color="crimson">
                                    *</font></label>
                            <div class="col-16">
                                <input class="form-control" type="number" min="1" name="amount" required>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-16">
                                <center>
                                    <input class="btn btn-outline-primary" type="submit" name="withdraw"
                                        value="WITHDRAW ORDER">
                                </center>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div style="text-align:center" class="col-md-16 col-lg-16 col-xl-16">
            <div class="card"><br>
                <h3 class="card-title" style="color:black"><b>Withdrawal History</b></h3>
                <div class="card-body table-responsive">
                    <div class="card-body table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Method</th>
                                    <th>Amount</th>
                                    <th>Details</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                           <tbody>
                            @forelse ($withdrawals as $item)
                            <tr>
                                <td>{{ $item->method }}</td>
                                <td>${{ number_format($item->amount,2) }}</td>
                                <td>{{ $item->details }}</td>
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
                                        You have not made any withdrawal
                                    </div>
                                </td>
                            </tr>
                            @endforelse
                           </tbody>
                        </table>

                    </div>

                </div>
            </div>
            <hr>
            <a href="index.html"><button style="float:center" class="btn btn-primary">Back to account</button></a>
        </div>
    @endsection
