@extends('layouts.user')

@section('content')
<h3 style="text-align:center;">Account Settings</h3>

<div class="row">
    <div class="col-sm-8 col-md-8">
      <form method="POST" action="{{ route('change.password') }}">
        @csrf
        <div class="card">
          <div class="card-header">
            <span>
              <h3 style="color:crimson;text-align:center"></h3>
            </span>
            <span>
              <h3 style="color:1b71fa;text-align:center"></h3>
            </span>
            <h6 class="card-title">CHANGE PASSWORD</h6>
          </div>
          <div class="card-body">
            <div class="form-group row">
              <label class="col-16 col-form-label">Old Password</label>
              <div class="col-16">
                <input class="form-control" type="password" name="old_password" required>
                @error('old_password')
                    <div class="text-danger">{{ $message }}</div>
                @enderror
              </div>
            </div>
            <div class="form-group row">
              <label class="col-16 col-form-label">New Password</label>
              <div class="col-16">
                <input class="form-control" type="password" name="password" required>
                @error('password')
                    <div class="text-danger">{{ $message }}</div>
                @enderror
              </div>
            </div>
            <div class="form-group row">
              <label class="col-16 col-form-label">Rewrite New Password</label>
              <div class="col-16">
                <input class="form-control" type="password" name="password_confirmation" required>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-16">
                <center></a>
                  <input class="btn btn-outline-primary" type="submit" name="reset" value="Change Password">
                </center>
              </div>
            </div>
          </div>
        </div>
      </form>
      <hr>
    </div>



    <div class="col-sm-8 col-md-8">
      <form action="{{ route('change.pics') }}" method="post" enctype="multipart/form-data">
        @csrf
        <div class="card">
          <div class="card-header">
            <h6 class="card-title">PROFILE IMAGE</h6>
          </div>
          <div class="card-body">
            <div class="form-group row">
              <label class="col-16 col-form-label">Change Profile Image</label>
              <div class="col-16">
                <img style="width:200px;height:200px;border-radius:30px" class="form-control" src="{{ asset('images/'.Auth::user()->pics) }}">
                <input class="form-control" type="file" name="profile_photo" accept="image/*" required>
                @error('profile_photo')
                    <div class="text-danger">{{ $message }}</div>
                @enderror
              </div>
            </div>
            <!-- <div class="form-group row"> -->
            <div class="col-16">
              <center>
                <!-- <a href="account"><input class="btn btn-outline-secondary" type="reset" name="request_btn" value="clear"></a> -->
                <input class="btn btn-outline-primary" type="submit" name="upload" value="Change Profile Image">
              </center>
            </div>
            <!-- </div> -->
          </div>
        </div>
      </form>
      <hr>
    </div>

  </div>
@endsection
