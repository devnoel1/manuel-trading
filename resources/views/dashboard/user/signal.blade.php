@extends('layouts.user')

@section('content')
<h1 style="text-align:center;">Purchase Signal Plan</h1>
<div style="float:center" class="row">
    <div class="col-sm-16 col-md-16">
      <div class="card">
        <div class="card-header">
          <span>
            <h3 style="color:crimson;text-align:center"></h3>
          </span>
        </div>
        <form action="{{ route('signal') }}" method="POST">
            @csrf
          <div class="card-body">
            <div class="form-group row">
              <label class="col-16 col-form-label">Full Name</label>
              <div class="col-16">
                <input style="color:black" class="form-control" type="text" value="Norchman Nowell " required>
              </div>
            </div>
            <input style="color:black" class="form-control" type="hidden" value="" id="example-search-input"
              required>

            <div class="form-group row">
              <label class="col-16 col-form-label">Email<font color="crimson">*</font></label>
              <div class="col-16">
                <input style="color:black" class="form-control" type="email" value="norchmarnnowell@gmail.com"
                  required>
              </div>
            </div>
            <div class="form-group row">
              <label for="example-url-input" class="col-16 col-form-label">Select Signal<font color="crimson">*
                </font></label>
              <div class="col-16">
                <select class="form-control" name="amount" required>
                  <option value="1500">Momentum Signals $1,500</option>
                  <option value="4200">Breakout Signals $4,200</option>
                  <option value="4999">Buying Oversold $4,999</option>
                  <option value="15700">Trend Signal $15,700</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-16">
                <center><input class="btn btn-outline-primary" type="submit" name="deposit" value="PURCHASE SIGNAL">
                </center>
              </div>
            </div>
        </form>
      </div>
    </div>
  </div>
@endsection
