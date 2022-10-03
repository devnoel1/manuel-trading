@extends('layouts.admin')

@section('content')
<div class="row">
    {{-- <div class="col-sm-6 col-md-6 col-lg-3">
        <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
            <div class="iq-card-body iq-box-relative">
                <div class="iq-box-absolute icon iq-icon-box rounded-circle iq-bg-primary">
                    <i class="ri-group-line"></i>
                </div>
                <p class="text-secondary">Total Users</p>
                <div class="d-flex align-items-center justify-content-between">
                    <h4><b>0</b></h4>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-6 col-md-6 col-lg-3">
        <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
            <div class="iq-card-body iq-box-relative">
                <div class="iq-box-absolute icon iq-icon-box rounded-circle iq-bg-danger">
                    <i class="ri-pantone-line"></i>
                </div>
                <p class="text-secondary">Withdrawal</p>
                <div class="d-flex align-items-center justify-content-between">
                    <h4><b>$190</b></h4>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-6 col-md-6 col-lg-3">
        <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
            <div class="iq-card-body iq-box-relative">
                <div class="iq-box-absolute icon iq-icon-box rounded-circle iq-bg-success">
                    <i class="ri-database-2-line"></i>
                </div>
                <p class="text-secondary">Deposits</p>
                <div class="d-flex align-items-center justify-content-between">
                    <h4><b>45</b></h4>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-6 col-md-6 col-lg-3">
        <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
            <div class="iq-card-body iq-box-relative">
                <div class="iq-box-absolute icon iq-icon-box rounded-circle iq-bg-warning">
                    <i class="ri-pie-chart-2-line"></i>
                </div>
                <p class="text-secondary">Trades</p>
                <div class="d-flex align-items-center justify-content-between">
                    <h4><b>60</b></h4>

                </div>
            </div>
        </div>
    </div> --}}


    <div class="col-lg-12">
        <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
            <div class="iq-card-header d-flex justify-content-between">
                <div class="iq-header-title">
                    <h4 class="card-title">Trades</h4>
                </div>
            </div>
            <div class="iq-card-body">
                <div class="table-responsive">
                    <table class="table mb-0">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Asset</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Contract</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse ($trades as $item)
                            <tr>
                                <td></td>
                                <td>{{ $item->assets }}</td>
                                <td>${{ number_format($item->amount,2) }}</td>
                                <td>{{ $item->duration }}</td>
                                <td>{{ $item->contract }}</td>
                                <td>
                                    @php
                                        if($item->status == 'running')
                                        {
                                            echo '<div class="badge badge-pill badge-primary">Running</div>';
                                        }else if($item->status == "lost")
                                        {
                                            echo '<div class="badge badge-pill badge-danger">Lost</div>';
                                        }else if ($item->status == "win") {
                                            echo '<div class="badge badge-pill badge-success">Win</div>';
                                        }
                                    @endphp

                                </td>
                                <td>
                                    <a href="" class="btn btn-primary">View</a>
                                </td>
                            </tr>
                            @empty

                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
