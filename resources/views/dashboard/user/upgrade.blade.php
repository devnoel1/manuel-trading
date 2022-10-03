@extends('layouts.user')


@section('content')
<h1 style="text-align:center;">Upgrade Account</h1>

<div style="float:center" class="row">
    <div class="col-sm-16 col-md-16">
      <div class="card">
        <div class="card-header">
          <span>
            <h3 style="color:crimson;text-align:center"></h3>
          </span>
        </div>
        <form action="{{ route('upgrade.store') }}" method="POST">
            @csrf
          <div class="card-body">
            <div class="form-group row">
              <label for="example-text-input" class="col-16 col-form-label">Full Name<font color="crimson">*</font></label>
              <div class="col-16">
                <input style="color:black" class="form-control" name="fullname" type="text" value="{{ Auth::user()->first_name }}{{ ' '.Auth::user()->last_name }}" id="example-text-input" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-16 col-form-label">Email<font color="crimson">*</font></label>
              <div class="col-16">
                <input style="color:black" class="form-control" type="email" name="email" value="{{ Auth::user()->email }}" required>
              </div>
            </div>

            <div class="form-group row">
              <label for="example-url-input" class="col-16 col-form-label">Select Package<font color="crimson">*</font></label>
              <div class="col-16">
                <select class="form-control" value="" name="plan" id="example-number-input" required>
                  <option>PREMIUM $1000-$1,999</option>
                  <option>SILVER $2,000-$4,999</option>
                  <option>GOLD $5,000-$9,999</option>
                  <option>ELITE $10,000-$19,999</option>
                  <option>PROFESSIONAL $20,000-$49,000</option>
                  <option>MAX $50,000-Above</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-16">
                <center>
                    <input class="btn btn-outline-primary" type="submit" name="request_upgrade" value="UPGRADE">
                </center>
              </div>
            </div>
        </form>
      </div>
    </div>
  </div>
@endsection
