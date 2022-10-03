<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.7, shrink-to-fit=no">
    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon">
    <title>Dashboard | CoinTradeOptions</title>
    <!-- ////////////////////// -->

    <!-- Fontawesome icon CSS -->
    <link rel="stylesheet" href="{{ asset('user/vendor/font-awesome-4.7.0/css/font-awesome.min.css') }}" type="text/css">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ asset('user/vendor/bootstrap-4.1.1/css/bootstrap.css') }}" type="text/css">

    <!-- DataTables Responsive CSS -->
    <link href="{{ asset('user/vendor/datatables/css/dataTables.bootstrap4.css') }}" rel="stylesheet">
    <link href="{{ asset('user/vendor/datatables/css/responsive.dataTables.min.css') }}" rel="stylesheet">

    <!-- jvectormap CSS -->
    <link href="{{ asset('user/vendor/jquery-jvectormap/jquery-jvectormap-2.0.3.css') }}" rel="stylesheet">

    <!-- Adminux CSS -->
    <link rel="stylesheet" href="{{ asset('user/css/lightblue_adminux.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('user/css/HoldOn.min.css') }}" type="text/css">
    <!-- <link rel="stylesheet" href="css/light+1b71fa_header_sidebar_adminux.css" type="text/css"> -->

    <!-- ///////////////////// -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <link rel="stylesheet" href="{{ asset('user/css/bootstrap-imageupload.css') }}">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <style>
        div.alert {
            padding: 4px 16px;
            background: white;
        }

        input:text {
            color: white;
        }
    </style>
</head>

<body class="menuclose menuclose-right">
    <header class="navbar-fixed">
        <nav class="navbar navbar-toggleable-md navbar-inverse bg-faded">
            <div class="sidebar-left"> <a class="navbar-brand imglogo" href=""></a>
                <button class="btn btn-link icon-header mr-sm-2 pull-right menu-collapse"><span
                        class="fa fa-bars"></span></button>
            </div>
            <div class="d-flex mr-auto"> &nbsp;</div>
            <ul class="navbar-nav content-right">
                <li class="v-devider"></li>

                <li class="nav-item"></li>

                <li class="v-devider"></li>
            </ul>
            <div class="sidebar-right pull-right ">
                <ul class="navbar-nav  justify-content-end">
                    <li class="nav-item">
                        <button class="btn-link btn userprofile" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false"></button>
                        <span class="userpic">
                            <img src="{{ asset('images/'.Auth::user()->pics) }}" alt="user pic">
                        </span>
                        <span class="text">{{ Auth::user()->first_name }}</span>
                    </li>
                    <li>
                        <a href="{{ route('logout') }}" class="btn btn-link icon-header"><span
                                class="fa fa-power-off"></span></a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <div class="sidebar-left">
        <div class="user-menu-items mb-4">
            <div class="list-unstyled btn-group">
                <button class="media btn btn-link" aria-haspopup="true" aria-expanded="false">
                    <span class="message_userpic">
                        <img class="d-flex" src="{{ asset('images/'.Auth::user()->pics) }}"
                            alt="Generic user image"></span> <span class="media-body">
                        <span class="mt-0 mb-1">{{ Auth::user()->first_name }}</span> <small></small> </span>
                </button>
            </div>
        </div>
        <ul class="nav flex-column in" id="side-menu">

            <li class="nav-item"> <a class="nav-link" href="{{ route('dashboard') }}"><i class="fa fa-home"></i>Account</a> </li>
            <li class="nav-item"> <a class="nav-link" href="{{ route('deposite.index') }}"><i
                        class="fa fa-money"></i>Deposit</a> </li>
            <li class="nav-item"> <a class="nav-link" href="{{ route('withdrawal.index') }}"><i
                        class="fa fa-briefcase"></i>Withdraw</a>
            </li>
            <li class="nav-item"> <a class="nav-link" href="{{ route('trade.create') }}"><i
                        class="fa fa-bar-chart"></i>Place
                    Trading</a>
            <li class="nav-item"> <a class="nav-link" href="{{ route('trade.index') }}"><i
                        class="fa fa-calendar-o"></i>Trade
                    History</a>
            <li class="nav-item"> <a class="nav-link" href="{{ route('signal.index') }}"><i class="fa fa-signal"></i>Purchase
                    Signal</a>
            <li class="nav-item"> <a class="nav-link" href="{{ route('upgrade') }}"><i class="fa fa-bank"></i>Account
                    Upgrade</a> </li>
            <li class="nav-item"> <a class="nav-link" href="{{ route('settings') }}"><i
                        class="fa fa-gear"></i>Account
                    Settings</a> </li>
            <!-- <li class="nav-item"> <a class="nav-link" href="notice"><i class="fa fa-envelope-o"></i>Notifications</a> </li> -->
            <li class="nav-item"> <a class="nav-link" href="{{ route('logout') }}"><i
                        class="fa fa-power-off"></i>Logout</a>
            </li>

        </ul>
        <hr>
        <ul class="nav flex-column in">
            <li class="nav-item ">
                <div class="nav-link">
                    <h5><span>Sunday 25th September 2022</span></h5>
                </div>
            </li>
        </ul>
        <br>
        <br>
    </div>
    <div class="wrapper-content">
        <div class="container">
            <div class="row  align-items-end  customer-profile-cover">
                <figure class="background"><img src="{{ asset('user/img/normal.png') }}" alt="Social cover image"> </figure>
                <div class="container mb-4">
                    <div class="row  align-items-center p-2">
                        <figure class="social-profile-pic">
                            <a href=""><img src="{{ asset('images/'.Auth::user()->pics) }}"
                                    alt=""></a>
                        </figure>
                        <div class="col-sm-16 col-lg-4 col-xl-4  profile-name">
                            <h2>{{ Auth::user()->first_name }} {{ Auth::user()->last_name }}<i style="color:1b71fa"
                                    class="fa fa-star"></i></h2>
                            <p>{{ Auth::user()->country }}</p>
                            <a href="{{ route('deposite.index') }}"><button
                                    class="btn btn-success ">Deposit</button></a>
                            <a href="{{ route('withdrawal.index') }}"><button
                                    class="btn btn-success  ml-1">Withdraw</button></a>
                        </div>
                        <div class="col-16 col-sm-16 col-lg-9 col-xl-9 text-right d-flex">

                            <div class="col col-sm-8 col-lg col-xl-8">
                                <h4>Investment <small></small></h4>
                                @php
                                $total_invest = 0;
                                    if(Auth::user()->trade)
                                    {
                                        foreach(Auth::user()->trade as $value)
                                        {
                                            if($value->status == "running")
                                            {
                                                $total_invest += $value->amount;
                                            }
                                        }
                                    }
                                @endphp
                                <h3><span class="text-warning">${{ number_format($total_invest,2) }}</span></h3>
                            </div>
                            <div class="col col-sm-8 col-lg col-xl-8">
                                <h4>Total Earning<small></small></h4>
                                <h3><span class="text-warning">${{ number_format(Auth::user()->wallet->amount,2) }}</span></h3>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            @yield('content')

            <div class="row">
                <div class="col-md-12">

                    <div id="google_translate_element"></div>
                    <script type="text/javascript">
                        function googleTranslateElementInit() {
                            new google.translate.TranslateElement({
                                pageLanguage: 'en'
                            }, 'google_translate_element');
                        }
                    </script>
                    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
                    </script>
                    <br>

                    {{-- <div class="form-group row">
                        <div class="col-6">
                            <button type="button" onclick="referralFunction()" class="btn btn-primary">Copy Referral
                                Link</button>
                        </div>
                        <div class="col-10">
                            <input type="text" style="color:black" class="form-control" id="referral_link"
                                value="" readonly="">
                        </div>
                    </div> --}}
                </div>

                <script>
                    function referralFunction() {
                        var copyReferral = document.getElementById("referral_link");
                        copyReferral.select();
                        copyReferral.setSelectionRange(0, 99999);
                        document.execCommand("copy");
                        Swal.fire('', '<b>Referral Link Copied :</b> ' + copyReferral.value + '', '', '');
                    }
                </script>

                <!-- TradingView Widget BEGIN -->
                <div class="tradingview-widget-container">
                    <div class="tradingview-widget-container__widget"></div>
                    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
                        {
                            "symbols": [{
                                    "proName": "FOREXCOM:SPXUSD",
                                    "title": "S&P 500"
                                },
                                {
                                    "proName": "FOREXCOM:NSXUSD",
                                    "title": "Nasdaq 100"
                                },
                                {
                                    "proName": "FX_IDC:EURUSD",
                                    "title": "EUR/USD"
                                },
                                {
                                    "proName": "BITSTAMP:BTCUSD",
                                    "title": "BTC/USD"
                                },
                                {
                                    "proName": "BITSTAMP:ETHUSD",
                                    "title": "ETH/USD"
                                }
                            ],
                            "showSymbolLogo": true,
                            "colorTheme": "light",
                            "isTransparent": false,
                            "displayMode": "adaptive",
                            "locale": "en"
                        }
                    </script>
                </div>
            </div>
            <!-- TradingView Widget END -->
        </div>
        <script data-cfasync="false" src="#"></script>

        <!-- jQuery first, then Tether, then Bootstrap JS. -->

        <script src="{{ asset('user/js/jquery-2.1.1.min.js') }}" type="text/javascript"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>

        <script src="{{ asset('user/vendor/bootstrap4beta/js/bootstrap.min.js') }}" type="text/javascript"></script>

        <!--Cookie js for theme chooser and applying it -->
        <script src="{{ asset('user/vendor/cookie/jquery.cookie.js') }}" type="text/javascript"></script>

        <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
        <script src="{{ asset('user/js/ie10-viewport-bug-workaround.js') }}"></script>

        <!-- Circular chart progress js -->
        <script src="{{ asset('user/vendor/cicular_progress/circle-progress.min.js') }}" type="text/javascript"></script>

        <!--sparklines js-->
        <script type="text/javascript" src="{{ asset('user/vendor/sparklines/jquery.sparkline.min.js') }}"></script>

        <!-- jvectormap JavaScript -->
        <script src="{{ asset('user/vendor/jquery-jvectormap/jquery-jvectormap.js') }}"></script>
        <script src="{{ asset('user/vendor/jquery-jvectormap/jquery-jvectormap-world-mill-en.js') }}"></script>

        <!-- chart js -->
        <script src="{{ asset('user/vendor/chartjs/Chart.bundle.min.js') }}" type="text/javascript"></script>
        <script src="{{ asset('user/vendor/chartjs/utils.js') }}" type="text/javascript"></script>

        <!-- spincremente js -->
        <script src="{{ asset('user/vendor/spincrement/jquery.spincrement.min.js') }}" type="text/javascript"></script>

        <!-- DataTables JavaScript -->
        <script src="{{ asset('user/vendor/datatables/js/jquery.dataTables.min.js') }}"></script>
        <script src="{{ asset('user/vendor/datatables/js/dataTables.bootstrap4.js') }}"></script>
        <script src="{{ asset('user/vendor/datatables/js/dataTables.responsive.min.js') }}"></script>

        <!-- custome template js -->
        <script src="{{ asset('user/js/adminux.js') }}" type="text/javascript"></script>
        <script src="{{ asset('user/js/HoldOn.min.js') }}" type="text/javascript"></script>
        <script src="{{ asset('user/js/dashboard1.js') }}"></script>
        <script src="{{ asset('user/js/trade.js') }}" type="text/javascript"></script>
        <!-- File Upload Preview -->
        <script src="{{ asset('user/js/bootstrap-imageupload.js') }}"></script>
        <script type="text/javascript">
            $('.imageupload').imageupload({
                allowedFormats: ['jpg', 'jpeg', 'png'],
                maxWidth: 250,
                maxHeight: 250,
                maxFileSizeKb: 5096
            });

            (function() {
                var options = {
                    whatsapp: "+", // WhatsApp number
                    call_to_action: "Contact Us!", // Call to action
                    position: "left", // Position may be "right" or "left"
                };
                var proto = document.location.protocol,
                    host = "getbutton.io",
                    url = proto + "//static." + host;
                var s = document.createElement("script");
                s.type = "text/javascript";
                s.async = true;
                s.src = url + "/widget-send-button/js/init.js";
                s.onload = function() {
                    WhWidgetSendButton.init(host, proto, options);
                };
                var x = document.getElementsByTagName("script")[0];
                x.parentNode.insertBefore(s, x);
            })();
        </script>
        <!-- /GetButton.io widget -->

        @if (Session::has('message'))
            <script>
                Swal.fire(
                    '',
                    '{{ Session::get("message") }}',
                    '{{ Session::get("type") }}'
                );
            </script>
        @endif
        @yield('scrips')
</body>

</html>
