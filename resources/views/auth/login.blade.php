@extends('layouts.auth')

@section('content')
<section class="section section_account section_login">
    <div class="wrapper">
      <div class="login-wrap">
        <div class="login" ng-controller="LGN" ng-cloak="">
          <div class="login-logo">
            <img src="{{ asset('images/logo-email.png') }}" alt="logo" />
          </div>
          <div class="login-block">
            <div class="login-name">Login to your account</div>
            <div class="login-form">
              <form action="{{ route('login') }}" method="post">
                @csrf
                <div class="box-field-wrap">
                  <div class="box-field">
                    <label class="box-field__label">EMAIL</label>
                    <div class="box-field__input">
                      <input type="text" name="email" class="form-control" placeholder="Username or Email" />
                    </div>
                    @error('email')
                        <div class="text-danger">{{ $message }}</div>
                    @enderror
                  </div>
                </div>
                <div class="box-field-wrap">
                  <div class="box-field">
                    <label class="box-field__label">PASSWORD</label>
                    <div class="box-field__input">
                      <input type="password" name="password" class="form-control" placeholder="Password"  />
                    </div>
                    @error('password')
                        <div class="text-danger">{{ $message }}</div>
                    @enderror
                  </div>
                </div>
                <div class="box-field-wrap box-field-wrap_mod">
                  <div class="box-field">
                    <button type="submit"  class="btn btn_button">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="login-bottom">
              <div class="login-forgot">
                <a href="{{ route('password.request') }}">Forgot your password?</a>
              </div>
              <div class="login-reg">
                <span>Don't have an account yet?</span><a href="{{ route('register') }}">Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
@endsection
