@extends('layouts.user')

@section('content')
<div class="row mb-4">
    <div class="col-md-16 col-lg-16 col-xl-16">
        <div class="activity-block success" id="bck">
            <!-- style="background: #1aca79;" -->
            <div class="media">
                <div class="media-body">
                    <a href="{{ route('trade.index') }}"><button class="btn btn-success"><i
                                class="fa fa-calendar-o"></i> View Trades History</button></a>
                    <a href="{{ route('settings') }}"><button style="float:right" class="btn btn-danger"><i
                                class="fa fa-gears"></i> Settings</button></a>
                    <hr>
                    {{-- <a href="#"><button style="float:center" class="btn btn-success"><i
                                class="fa fa-calendar-o"></i> View Transactions</button></a> --}}
                    <a href="{{ route('trade.create') }}"><button style="float:right" class="btn btn-success"><i
                                class="fa fa-bar-chart"></i> Place Trade</button></a>
                    <hr>
                    <h2 style="text-align:center">Account Information</h2>
                    <hr>
                    <a style="float:left;font-size:20px;font-weight:bold">Full Name</a>
                    <a style="float:right;font-size:18px;letter-spacing:3px">{{ Auth::user()->first_name }} {{ Auth::user()->last_name }} </a>
                    <br>
                    {{-- <hr>
                    <a style="float:left;font-size:20px;font-weight:bold">UserName</a>
                    <a style="float:right;font-size:18px;letter-spacing:1px">Norchmarn</a> --}}
                    <br>
                    <hr>
                    <a style="float:left;font-size:20px;font-weight:bold">Email</a>
                    <a
                        style="float:right;font-size:18px;letter-spacing:1px">{{ Auth::user()->email }}</a>
                    <br>
                    <hr>
                    <a style="float:left;font-size:20px;font-weight:bold">Reg. Date</a>
                    <a style="float:right;font-size:18px;letter-spacing:1px">{{ Auth::user()->created_at }}</a>
                    <br>
                    <hr>
                    <a style="float:left;font-size:20px;font-weight:bold">Phone</a>
                    <a style="float:right;font-size:20px;letter-spacing:3px">{{ Auth::user()->phone }}</a>
                    <br>
                    <hr>
                    <a style="float:left;font-size:20px;font-weight:bold">Package</a>
                    <a style="float:right;font-size:18px;letter-spacing:1px">NONE</a>
                    <br>
                    <hr>
                    <a style="float:left;font-size:20px;font-weight:bold">Signal</a>
                    <a style="float:right;font-size:18px;letter-spacing:3px">NONE</a>
                    <br>
                    <hr>

                    <a style="float:left;font-size:20px;font-weight:bold">Account Status</a>
                    <a style="float:right;font-size:20px;letter-spacing:3px"><b
                            style="color:white;background:1b71fa;padding:4px 7px";border-radius:10px>Verified</b></a>
                    <br>
                    <hr>
                    <a style="text-align:center;font-size:20px;font-weight:bold"
                        href="mailto:support@CoinTradeOptions.com"><i class="fa fa-envelope"></i>
                        CONTACT SUPPORT</a>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="progress ">
                    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0"
                        aria-valuemax="100" style="width: 39%;"><span class="trackerball"></span>
                    </div>
                </div>
            </div>
            <i class="bg-icon text-center fa fa-user"></i>
        </div>
    </div>
</div>
<div class="row mb-3">
    <div class="col-md-16 col-lg-16 col-xl-16">
        <div class="tradingview-widget-container">
            <div id="tradingview_e705a" style="height:550px"></div>
            <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
            <script type="text/javascript">
                new TradingView.widget({
                    "autosize": true,
                    // "width": 1200,
                    // "height": 610,
                    // "symbol": "FX:EURUSD",
                    "symbol": "NASDAQ:AAPL",
                    "interval": "1",
                    "timezone": "America/New_York",
                    "theme": "dark",
                    "style": "1",
                    "locale": "en",
                    "toolbar_bg": "#f1f3f6",
                    "enable_publishing": false,
                    "hide_side_toolbar": false,
                    "allow_symbol_change": true,
                    "details": true,
                    "studies": [
                        "AwesomeOscillator@tv-basicstudies",
                        "MACD@tv-basicstudies"
                    ],
                    "container_id": "tradingview_e705a"
                });
            </script>
        </div>
        <!-- TradingView Widget END -->
        <!--</div>-->
    </div>
</div>
@endsection
