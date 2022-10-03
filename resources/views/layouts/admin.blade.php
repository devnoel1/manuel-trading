<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>dashboard</title>
    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ asset('admin/images/favicon.ico') }}" />
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ asset('admin/css/bootstrap.min.css') }}">
    <!-- Typography CSS -->
    <link rel="stylesheet" href="{{ asset('admin/css/typography.css') }}">
    <!-- Style CSS -->
    <link rel="stylesheet" href="{{ asset('admin/css/style.css') }}">
    <!-- Responsive CSS -->
    <link rel="stylesheet" href="{{ asset('admin/css/responsive.css') }}">

    <link rel="stylesheet" href="{{ asset('admin/css/flatpickr.min.css') }}">
    <link rel="styesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" />


</head>

<body>

    <!-- Wrapper Start -->
    <div class="wrapper">
        <!-- Sidebar  -->
        <div class="iq-sidebar">
            <div class="iq-navbar-logo d-flex justify-content-between">
                <a href="{{ route('dashboard') }}" class="header-logo">
                    {{-- <img src="images/logo.png" class="img-fluid rounded" alt=""> --}}
                    <span></span>
                </a>
                <div class="iq-menu-bt align-self-center">
                    <div class="wrapper-menu">
                        <div class="main-circle"><i class="ri-menu-line"></i></div>
                        <div class="hover-circle"><i class="ri-close-fill"></i></div>
                    </div>
                </div>
            </div>
            <div id="sidebar-scrollbar">
                <nav class="iq-sidebar-menu">
                    <ul id="iq-sidebar-toggle" class="iq-menu">
                        <li class="{{ Route::is('dashboard') ? 'active' : '' }}">
                            <a href="{{ route('dashboard') }}" class="iq-waves-effect">
                                <span class="ripple rippleEffect"></span>
                                <i class="las la-home iq-arrow-left"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li class="{{ Request::is('admin/trade') || Request::is('admin/trade/*') ? 'active' : '' }}">
                            <a href="{{ route('admin.trade.index') }}" class="iq-waves-effect">
                                <span class="ripple rippleEffect"></span>
                                <i class="las la-chart-bar iq-arrow-left"></i>
                                <span>Trades</span>
                            </a>
                        </li>
                        <li
                            class="{{ Request::is('admin/deposite') || Request::is('admin/deposite/*') ? 'active' : '' }}">
                            <a href="{{ route('admin.deposite.index') }}" class="iq-waves-effect">
                                <span class="ripple rippleEffect"></span>
                                <i class="las la-hand-holding-usd iq-arrow-left"></i>
                                <span>Deposit</span>
                            </a>
                        </li>

                        <li
                            class="{{ Request::is('admin/withdrawal') || Request::is('admin/withdrawal/*') ? 'active' : '' }}">
                            <a href="{{ route('admin.withdrawal.index') }}" class="iq-waves-effect">
                                <span class="ripple rippleEffect"></span>
                                <i class="las la-wallet iq-arrow-left"></i>
                                <span>Withdrawals</span>
                            </a>
                        </li>
                        <li class="{{ Request::is('admin/settings') ? 'active' : '' }}">
                            <a href="{{ route('admin.settings') }}" class="iq-waves-effect">
                                <span class="ripple rippleEffect"></span>
                                <i class="las la-cogs iq-arrow-left"></i>
                                <span>Settings</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="p-3"></div>
            </div>
        </div>
        <!-- TOP Nav Bar -->
        <div class="iq-top-navbar">
            <div class="iq-navbar-custom">
                <nav class="navbar navbar-expand-lg navbar-light p-0">
                    <div class="iq-menu-bt d-flex align-items-center">
                        <div class="wrapper-menu">
                            <div class="main-circle"><i class="ri-menu-line"></i></div>
                            <div class="hover-circle"><i class="ri-close-fill"></i></div>
                        </div>
                        <div class="iq-navbar-logo d-flex justify-content-between ml-3">
                            <a href="" class="header-logo">
                                {{-- <img src="images/logo.png" class="img-fluid rounded" alt=""> --}}
                                <span>FinDash</span>
                            </a>
                        </div>
                    </div>

                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-label="Toggle navigation">
                        <i class="ri-menu-3-line"></i>
                    </button>

                    <ul class="navbar-nav ml-auto navbar-list">
                        <li class="navbar-item line-height">
                            <a href="#" class="search-toggle iq-waves-effect d-flex align-items-center">
                                <img src="{{ asset('images/' . Auth::user()->pics) }}" class="img-fluid rounded mr-3"
                                    alt="user">
                                <div class="caption">
                                    <h6 class="mb-0 line-height">{{ Auth::user()->first_name }}</h6>
                                    <p class="mb-0">Admin</p>
                                </div>
                            </a>
                            <div class="iq-sub-dropdown iq-user-dropdown">
                                <div class="iq-card shadow-none m-0">
                                    <div class="iq-card-body p-0 ">
                                        <div class="bg-primary p-3">
                                            <h5 class="mb-0 text-white line-height">Hello
                                                {{ Auth::user()->first_name }}</h5>
                                            <span class="text-white font-size-12">Available</span>
                                        </div>

                                        <div class="d-inline-block w-100 text-center p-3">
                                            <a class="bg-primary iq-sign-btn" href="{{ route('logout') }}"
                                                role="button">Sign
                                                out<i class="ri-login-box-line ml-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <!-- TOP Nav Bar END -->

        <!-- Page Content  -->
        <div id="content-page" class="content-page">
            <div class="container-fluid">
                @yield('content')
            </div>
        </div>
    </div>
    <!-- Wrapper END -->


    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="{{ asset('admin/js/jquery.min.js') }}"></script>
    <script src="{{ asset('admin/js/popper.min.js') }}"></script>
    <script src="{{ asset('admin/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('admin/js/jquery.appear.js') }}"></script>
     <!-- Countdown JavaScript -->
     <script src="{{ asset('admin/js/countdown.min.js') }}"></script>
     <!-- Counterup JavaScript -->
     <script src="{{ asset('admin/js/waypoints.min.js') }}"></script>
     <script src="{{ asset('admin/js/jquery.counterup.min.js') }}"></script>
     <!-- Wow JavaScript -->
     <script src="{{ asset('admin/js/wow.min.js') }}"></script>
     <!-- Apexcharts JavaScript -->
     <script src="{{ asset('admin/js/apexcharts.js') }}"></script>
     <!-- Slick JavaScript -->
     <script src="{{ asset('admin/js/slick.min.js') }}"></script>
     <!-- Select2 JavaScript -->
     <script src="{{ asset('admin/js/select2.min.js') }}"></script>
     <!-- Owl Carousel JavaScript -->
     <script src="{{ asset('admin/js/owl.carousel.min.js') }}"></script>
     <!-- Magnific Popup JavaScript -->
     <script src="{{ asset('admin/js/jquery.magnific-popup.min.js') }}"></script>
     <!-- Smooth Scrollbar JavaScript -->
     <script src="{{ asset('admin/js/smooth-scrollbar.js') }}"></script>
     <!-- lottie JavaScript -->
     <script src="{{ asset('admin/js/lottie.js') }}"></script>
     <!-- am core JavaScript -->
     <script src="{{ asset('admin/js/core.js') }}"></script>
     <!-- am charts JavaScript -->
     <script src="{{ asset('admin/js/charts.js') }}"></script>
     <!-- am animated JavaScript -->
     <script src="{{ asset('admin/js/animated.js') }}"></script>
     <!-- am kelly JavaScript -->
     <script src="{{ asset('admin/js/kelly.js') }}"></script>
     <!-- am maps JavaScript -->
     <script src="{{ asset('admin/js/maps.js') }}"></script>
     <!-- am worldLow JavaScript -->
     <script src="{{ asset('admin/js/worldLow.js') }}"></script>
     <!-- Raphael-min JavaScript -->
     <script src="{{ asset('admin/js/raphael-min.js') }}"></script>
     <!-- Morris JavaScript -->
     <script src="{{ asset('admin/js/morris.js') }}"></script>
     <!-- Morris min JavaScript -->
     <script src="{{ asset('admin/js/morris.min.js') }}"></script>
     <!-- Flatpicker Js -->
     <script src="{{ asset('admin/js/flatpickr.js') }}"></script>
     <!-- Style Customizer -->
     <script src="{{ asset('admin/js/style-customizer.js') }}"></script>
     <!-- Chart Custom JavaScript -->
     <script src="{{ asset('admin/js/chart-custom.js') }}"></script>
     <script src="{{ asset('admin/js/custom.js') }}"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>


    @if (Session::has('message'))
    <script>
        Swal.fire({
      title: '{{ Session::get("type") }}',
      text: '{{ Session::get("message") }}',
      icon: '{{ Session::get("type") }}',
      confirmButtonText: 'Cool'
    })
    </script>
    @endif

    @yield('scrips')
</body>

</html>
