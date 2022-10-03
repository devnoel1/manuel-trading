@extends('layouts.user')

@section('content')
    <h2 style="text-align:center">Trade History</h2>
    <div class="row">
        <div class="col-md-16 col-lg-16 col-xl-16">
            <div class="card">
                <div class="card-header card-success">
                    <h4 class="card-title font-weight-bold m-0">Trade ROI History</h4>
                </div>
                <div class="card-body table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Asset</th>
                                <th>Amount</th>
                                <th>Duration</th>
                                <th>Contract</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                       <tbody>
                        @forelse ($trades as $item)
                        <tr>
                            <td>{{ $item->assets }}</td>
                            <td>{{ $item->amount }}</td>
                            <td>{{ $item->duration }}</td>
                            <td>{{ $item->contract }}</td>
                            <td>
                                @php
                                    if($item->status == "running")
                                    {
                                        echo '<div class="badge badge-primary">Running</div>';
                                    }else if($item->status =="lost"){
                                        echo '<div class="badge badge-danger">Lost</div>';
                                    }elseif ($item->status == "win") {
                                        echo '<div class="badge badge-success">win</div>';
                                    }
                                @endphp
                            </td>
                        </tr>
                        @empty
                        <tr>
                            <td colspan="6">
                                <div class="text-center text-danger">
                                    You do not have an active trade. Visit the trade center to place a trade
                                </div>
                            </td>
                        </tr>
                        @endforelse
                       </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
@endsection
