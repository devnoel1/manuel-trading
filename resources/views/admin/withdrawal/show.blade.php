@extends('layouts.admin')

@section('content')
    <div class="iq-card">
        <div class="iq-card-header d-flex justify-content-between">
            <div class="iq-header-title">
                <h4 class="card-title">Withdrawal Details</h4>
            </div>
        </div>
        <div class="iq-card-body">
            <table class="table mb-4">

                <tr>
                    <th>Amount:</th>
                    <td>${{ $withdrawal->amount }}</td>
                </tr>
                <tr>
                    <th>Method:</th>
                    <td>{{ $withdrawal->method }}</td>
                </tr>
                <tr>
                    <th>Details:</th>
                    <td>{{ $withdrawal->details }}</td>
                </tr>
                <tr>
                    <th>Date:</th>
                    <td>{{ $withdrawal->created_at }}</td>
                </tr>

                <tr>
                    <th>Status:</th>
                    <td>
                        @php
                            if ($withdrawal->status == 'pending') {
                                echo '<div class="badge badge-pill badge-primary">Pending</div>';
                            } elseif ($withdrawal->status == 'cancel') {
                                echo '<div class="badge badge-pill badge-danger">Canceled</div>';
                            } elseif ($withdrawal->status == 'approved') {
                                echo '<div class="badge badge-pill badge-success">Approved</div>';
                            }
                        @endphp
                    </td>
                </tr>
            </table>

            <form action="{{ route('admin.withdrawal.update', $withdrawal->id) }}" method="POST">
                @csrf
                @method('PUT')
                <div class="form-group">
                    <label for="">Update withdrawal Status</label>
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
