@extends('layouts.admin')

@section('content')
    <div class="row">
        <div class="col-lg-4">
            <div class="iq-card">
                <div class="iq-card-body">
                    <div class="d-flex flex-column align-items-center">
                        <div class="profile-img-edit">
                            <img class="profile-pic" src="{{ asset('images/' . $trade->user->pics) }}" width="150px"
                                height="150px" alt="profile-pic">
                            {{-- <div class="p-image">
                           <i class="ri-pencil-line upload-button"></i>
                           <input class="file-upload" type="file" accept="image/*"/>
                        </div> --}}
                        </div>
                        <h4>{{ $trade->user->first_name . ' ' . $trade->user->last_name }}</h4>
                    </div>
                </div>
            </div>
            <div class="iq-card">
                <div class="iq-card-body">
                    <form action="{{ route('admin.credit.user',$trade->id) }}" method="POST">
                        @csrf
                        <div class="form-group">
                            <label for="">Credit User With Profit</label>
                            <input class="form-control" name="amount">
                            @error('amount')
                                <div class="text-danger">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        <div class="col-lg-8">
            <div class="iq-card">
                <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                        <h4 class="card-title">Trade Information</h4>
                    </div>
                </div>
                <div class="iq-card-body">
                    <table class="table mb-4">
                        <tr>
                            <th>Asset:</th>
                            <td>{{ $trade->assets }}</td>
                        </tr>
                        <tr>
                            <th>Amount:</th>
                            <td>${{ $trade->amount }}</td>
                        </tr>
                        <tr>
                            <th>Contract:</th>
                            <td>{{ $trade->contract }}</td>
                        </tr>
                        <tr>
                            <th>Duration:</th>
                            <td>{{ $trade->duration }}</td>
                        </tr>
                        <tr>
                            <th>Status:</th>
                            <td>
                                @php
                                    if ($trade->status == 'running') {
                                        echo '<div class="badge badge-pill badge-primary">Running</div>';
                                    } elseif ($trade->status == 'lost') {
                                        echo '<div class="badge badge-pill badge-danger">Lost</div>';
                                    } elseif ($trade->status == 'win') {
                                        echo '<div class="badge badge-pill badge-success">Win</div>';
                                    }
                                @endphp
                            </td>
                        </tr>
                    </table>

                    <form action="{{ route('admin.trade.update',$trade->id) }}" method="POST">
                        @csrf
                        @method('PUT')
                        <div class="form-group">
                            <label for="">Update Trade Status</label>
                            <select class="form-control" name="trade_status">
                                <option value="">--select--status---</option>
                                <option value="running">Running</option>
                                <option value="lost">Lost</option>
                                <option value="win">win</option>
                            </select>
                            @error('trade_status')
                            <div class="text-danger">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
