@extends('layouts.admin')

@section('content')
<div class="row">
    <div class="col-lg-12">
        <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
            <div class="iq-card-header d-flex justify-content-between">
                <div class="iq-header-title">
                    <h4 class="card-title">Deposit Address</h4>
                </div>
            </div>
            <div class="iq-card-body">
                <form action="{{ route('admin.deposit-address') }}" method="POST">
                    @csrf
                    <div class="form-group">
                        <label for="">Crypto  address(BTC)</label>
                        <input name="address" class="form-control" value="{{ $address? $address->address:'' }}"/>
                        @error('address')
                            <div class="text-danger">{{ $message }}</div>
                        @enderror
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    <div class="row">
        <div class="col-lg-6">
            <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                        <h4 class="card-title">Change Password</h4>
                    </div>
                </div>
                <div class="iq-card-body">
                    <form method="POST" action="{{ route('change.password') }}">
                        @csrf
                        <div class="form-group">
                            <label>Old Password</label>
                            <input class="form-control" type="password" name="old_password" required>
                            @error('old_password')
                                <div class="text-danger">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="form-group">
                            <label>New Password</label>
                            <div>
                                <input class="form-control" type="password" name="password" required>
                                @error('password')
                                    <div class="text-danger">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Rewrite New Password</label>
                            <div>
                                <input class="form-control" type="password" name="password_confirmation" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <div>
                                <input class="btn btn-outline-primary" type="submit" name="reset"
                                    value="Change Password">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                        <h4 class="card-title">Profile Image</h4>
                    </div>
                </div>
                <div class="iq-card-body">
                    <form action="{{ route('change.pics') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <img style="width:200px;height:200px;border-radius:30px" class="form-control" src="{{ asset('images/'.Auth::user()->pics) }}">
                    <input class="form-control" type="file" name="profile_photo" accept="image/*" required>
                    @error('profile_photo')
                        <div class="text-danger">{{ $message }}</div>
                    @enderror
                    <div class="col-16 mt-4">
                        <center>
                          <!-- <a href="account"><input class="btn btn-outline-secondary" type="reset" name="request_btn" value="clear"></a> -->
                          <input class="btn btn-outline-primary" type="submit" name="upload" value="Change Profile Image">
                        </center>
                      </div>
                      <!-- </div> -->
                    </div>
                    </form>


                </div>
            </div>
        </div>
    </div>
@endsection
