@extends('layouts.admin')

@section('content')
<div class="col-lg-12">
    <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
        <div class="iq-card-header d-flex justify-content-between">
            <div class="iq-header-title">
                <h4 class="card-title">Deposits</h4>
            </div>
        </div>
        <div class="iq-card-body">
            <div class="table-responsive">
                <table class="table mb-0">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">USer</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ($deposits as $item)
                        <tr>
                            <td>{{ $item->user->first_name.' '.$item->user->last_name }}</td>
                            <td>${{ number_format($item->amount,2) }}</td>
                            <td>{{ $item->created_at }}</td>
                            <td>
                                @php
                                    if($item->status == 'pending')
                                    {
                                        echo '<div class="badge badge-pill badge-primary">pending</div>';
                                    }else if($item->status == "cancel")
                                    {
                                        echo '<div class="badge badge-pill badge-danger">Canceled</div>';
                                    }else if ($item->status == "approved") {
                                        echo '<div class="badge badge-pill badge-success">Approved</div>';
                                    }
                                @endphp

                            </td>
                            <td>
                                <a href="{{ route('admin.deposite.show',$item->id) }}" class="btn btn-primary">View</a>
                            </td>
                        </tr>
                        @empty
                        <tr>
                            <td colspan="4">no deposites</td>
                        </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
