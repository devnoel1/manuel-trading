@extends('layouts.admin')

@section('content')
    <div class="iq-card">
        <div class="iq-card-header d-flex justify-content-between">
            <div class="iq-header-title">
                <h4 class="card-title">Deposit Details</h4>
            </div>
        </div>
        <div class="iq-card-body">
            <table class="table mb-4">

                <tr>
                    <th>Amount:</th>
                    <td>$ {{ number_format($deposit->amount,2) }}</td>
                </tr>
                <tr>
                    <th>Date:</th>
                    <td>{{ $deposit->created_at }}</td>
                </tr>
                <tr>
                    <th>Status:</th>
                    <td>
                        @php
                            if ($deposit->status == 'pending') {
                                echo '<div class="badge badge-pill badge-primary">Pending</div>';
                            } elseif ($deposit->status == 'cancel') {
                                echo '<div class="badge badge-pill badge-danger">Canceled</div>';
                            } elseif ($deposit->status == 'approved') {
                                echo '<div class="badge badge-pill badge-success">Approved</div>';
                            }
                        @endphp
                    </td>
                </tr>
                <tr>
                    <th colspan="2">Prove of Payment:</th>
                </tr>
                <tr>
                    <td colspan="2">
                        <img src="{{ asset('uploads/' . $prove->file) }}" width="350px" alt="">
                    </td>
                </tr>
            </table>

            <form action="{{ route('admin.deposite.update', $deposit->id) }}" method="POST">
                @csrf
                @method('PUT')
                <div class="form-group">
                    <label for="">Update deposit Status</label>
                    <select class="form-control" name="status">
                        <option value="">--select--status---</option>
                        <option value="cancel">Cancel</option>
                        <option value="approved">Approved</option>
                    </select>
                    @error('status')
                        <div class="text-danger">{{ $message }}</div>
                    @enderror
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">submit</button>
                </div>
            </form>
        </div>
    </div>
@endsection
