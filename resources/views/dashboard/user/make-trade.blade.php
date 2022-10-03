@extends('layouts.user')

@section('content')
<div class="row mt-4">
    <div class="col-md-16 col-lg-12 col-xl-12">
        <!-- TradingView Widget BEGIN -->
        <div class="tradingview-widget-container">
            <div id="tradingview_e705a" style="height:430px"></div>
            <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
            <script type="text/javascript">
                new TradingView.widget({
                    "autosize": true,
                    /*"width": 1200,
                    "height": 420,*/
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
                    "hotlist": true,
                    "calendar": true,
                    "studies": [
                        "AwesomeOscillator@tv-basicstudies",
                        "MACD@tv-basicstudies"
                    ],
                    "container_id": "tradingview_e705a"
                });
            </script>
        </div>
        <!-- TradingView Widget END -->
    </div>
    <div class="col-md-16 col-lg-4 col-xl-4">
        <h4 align="center">Manual Trading</h4>
        <form method="POST" action="{{ route('trade.store') }}">
            @csrf
            <input type="hidden" id="currency" value="$">
            <input type="hidden" name="user_id" value="114">
            <div class="form-group">
                <label class="control-label">Asset</label>
                <select class="form-control input-sm" data-minimum-results-for-search="Infinity" class="form-control input-sm" name="trade_asset" id="asset" style="width:100%;border:2px solid #1F77FB; box-shadow: 5px 5px 5px #3584DD;" required="">
                    <option selected="" value="">- Select Asset -</option>
                    <optgroup label="Stock">
                        <option value="AAPL">AAPL</option>
                        <option value="GOOGL">GOOGL</option>
                        <option value="MSFT">MSFT</option>
                        <option value="GOOG">GOOG</option>
                        <option value="US-30">US-30</option>
                        <option value="S&P500">S&P500</option>
                        <option value="FACEBOOK">FACEBOOK</option>
                        <option value="NASDAQ">NASDAQ</option>
                        <option value="OCGN">OCGN</option>
                        <option value="NVAX">NVAX</option>
                        <option value="RTS-F-SEP16">RTS F-SEP16</option>
                        <option value="FB">FB</option>
                        <option value="AMZN">AMZN</option>
                        <option value="SNE">SNE</option>
                        <option value="TSLA">TSLA</option>
                        <option value="TWTR">TWTR</option>
                        <option value="NFLX">NFLX</option>
                    </optgroup>
                    <!--<optgroup label="Forex">
                        <option value="EURUSD">EURUSD</option>
                        <option value="GBPUSD">GBPUSD</option>
                        <option value="USDJPY">USDJPY</option>
                        <option value="USDCHF">USDCHF</option>
                        <option value="AUDUSD">AUDUSD</option>
                        <option value="USDCAD">USDCAD</option>
                        <option value="XAUZAR">XAUZAR</option>
                        <option value="XAUHKD">XAUHKD</option>
                        <option value="XAUCNH">XAUCNH</option>
                        <option value="XAUDKK">XAUDKK</option>
                        <option value="XAUMXN">XAUMXN</option>
                        <option value="CHFJPY">CHFJPY</option>
                        <option value="CADJPY">CADJPY</option>
                        <option value="EURAUD">EURAUD</option>
                        <option value="EURCAD">EURCAD</option>
                        <option value="EURCHF">EURCHF</option>
                        <option value="EURGBP">EURGBP</option>
                        <option value="EURNZD">EURNZD</option>
                        <option value="GBPAUD">GBPAUD</option>
                        <option value="GBPCHF">GBPCHFP</option>
                        <option value="GBPNZD">GBPNZD</option>
                        <option value="XAUUSD">XAUUSD</option>
                        <option value="NZDUSD">NZDUSD</option>
                        <option value="AUDCAD">AUDCAD</option>
                        <option value="AUDCHF">AUDCHF</option>
                        <option value="AUDJPY">AUDJPY</option>
                        <option value="AUDNZD">AUDNZD</option>
                        <option value="AUDUSD">AUDUSD</option>
                        <option value="CADCHF">CADCHF</option>
                    </optgroup>-->
                    <optgroup label="Cryptocurrency">
                        <option value="BCHUSD">BCHUSD</option>
                        <option value="BCHBTC">BCHBTC</option>
                        <option value="BTCUSD">BTCUSD</option>
                        <option value="ETHBTC">ETHBTC</option>
                        <option value="ETHUSD">ETHUSD</option>
                        <option value="LTCBTC">LTCBTC</option>
                        <option value="LTCUSD">LTCUSD</option>
                        <option value="XRPUSD">XRPUSD</option>
                        <option value="XRPBTC">XRPBTC</option>
                        <option value="DSHUSD">DSHUSD</option>
                        <option value="DSHBTC">DSHBTC</option>
                        <option value="DSHMXN">DSHMXN</option>
                        <option value="DSHPLN">DSHPLN</option>
                        <option value="DSHETH">DSHETH</option>
                        <option value="DSHXAU">DSHXAU</option>
                        <option value="DSHCNH">DSHCNH</option>
                        <option value="DSHDKK">DSHDKK</option>
                        <option value="DSHXAG">DSHXAG</option>
                        <option value="DSHLTC">DSHLTC</option>
                        <option value="DSHXRP">DSHXRP</option>
                    </optgroup>
                    <optgroup label="Indices">
                        <option value="INDEXSPX">INDEX:SPX</option>
                        <option value="INDEXIUXX">INDEX:IUXX</option>
                        <option value="INDEXDOWI">INDEX:DOWI</option>
                        <option value="INDEXNKY">INDEX:NKY</option>
                    </optgroup>
                    <optgroup label="Commodities">
                        <option value="CME_MINIES1">CME_MINI:ES1!</option>
                        <option value="CMEE61">CME:E61!</option>
                        <option value="COMEXGC1">COMEX:GC1!</option>
                        <option value="NYMEXCL1">NYMEX:CL1!</option>
                        <option value="NYMEXNG1">NYMEX:NG1!</option>
                        <option value="CBOTZC1">CBOT:ZC1!</option>
                        <option value="USOIL">USOIL</option>
                        <option value="UK100.F">UK100.F</option>
                        <option value="UKOIL">UKOIL</option>
                        <option value="NASDAQ100">NASDAQ100</option>
                        <option value="ALIBABA">ALIBABA</option>
                        <option value="NETFLIX">NETFLIX</option>
                        <option value="MFST">MFST</option>
                        <option value="GOLD">GOLD</option>
                        <option value="PLATINUM">PLATINUM</option>
                        <option value="TESCO">TESCO</option>
                        <option value="BARC">BARC</option>
                        <option value="ADDIDAS.K">ADDIDAS.K</option>
                        <option value="SILVER">SILVER</option>
                        <option value="BBVA.k">BBVA.k</option>
                    </optgroup>
                    <!--<optgroup label="Bonds">
                        <option value="CHRISCME_CL1">CHRIS/CME_CL1</option>
                        <option value="CMEGE1">CME:GE1!</option>
                        <option value="CBOTZB1">CBOT:ZB1!</option>
                        <option value="CBOTUD1">CBOT:UD1!</option>
                        <option value="EUREXGG1">EUREX:GG1!</option>
                        <option value="EUREXII1">EUREX:II1!</option>
                        <option value="EUREXHR1">EUREX:HR1!</option>
                    </optgroup>-->
                </select>
                    <!-- <select class="form-control input-sm" name="asset" id="asset" style="border:2px solid #1F77FB; box-shadow: 5px 5px 5px #3584DD;" required="">
                        <option value="">Select Currency Pair</option>
                        <option value="EURUSD" selected="">EUR/USD</option>
                        <option value="EURJPY">EUR/JPY</option>
                        <option value="GBPUSD">GBP/USD</option>
                        <option value="USDCHF">USD/CHF</option>
                        <option value="AUDUSD">AUD/USD</option>
                        <option value="USDCAD">USD/CAD</option>
                        <option value="NZDUSD">NZD/USD</option>
                    </select> -->
                    <div id="redirect"></div>
                    @error('trade_asset')
                        <div class="text-danger">{{ $message }}</div>
                    @enderror
            </div>
            <div class="form-group">
                <label class="control-label">Amount ($)
                </label>
                <input type="number" name="trade_amount" min="10" id="trade_amount" class="form-control input-sm" style="border:2px solid #0FEF39; box-shadow: 5px 5px 5px #50E26B;" required="">
                @error('trade_amount')
                        <div class="text-danger">{{ $message }}</div>
                    @enderror
            </div>
            <div style="color:#fff;" id="payout" align="center"></div>
            <div class="form-group">
                <label class="control-label">Duration</label>
                <select class="form-control input-sm" name="duration" id="duration" style="border:2px solid #1F77FB; box-shadow: 5px 5px 5px #3584DD;" required="">
                    <option value="">Select Amount/Price First</option>
                    <option value="5 Minutes">5 Minutes</option>
                    <option value="20 Minutes">20 Minutes</option>
                    <option value="35 Minutes">35 Minutes</option>
                    <option value="1 Day">1 Day</option>
                    <option value="2 Days">2 Days</option>
                    <option value="3 Days">3 Days</option>
                    <option value="4 Days">4 Days</option>
                    <option value="5 Days">5 Days</option>
                    <option value="6 Days">6 Days</option>
                    <option value="7 Days">7 Days</option>
                    <option value="8 Days">8 Days</option>
                    <option value="9 Days">9 Days</option>
                    <option value="10 Days">10 Days</option>
                    <option value="11 Days">11 Days</option>
                    <option value="12 Days">12 Days</option>
                    <option value="13 Days">13 Days</option>
                    <option value="14 Days">14 Days</option>
                </select>
                @error('duration')
                        <div class="text-danger">{{ $message }}</div>
                    @enderror
            </div>

            <div class="form-group">
                <label class="control-label">Contract</label>
                <select class="form-control input-sm" name="contract" id="contract" style="border:2px solid #1F77FB; box-shadow: 5px 5px 5px #3584DD;" required="">
                    <option value="">Select Contract</option>
                    <option value="CALL">CALL</option>
                    <option value="PUT">PUT</option>
                </select>
                @error('contract')
                        <div class="text-danger">{{ $message }}</div>
                    @enderror
            </div>


            <div class="form-group opheuscenter" id="decision" align="center">

            </div>

            <div class="form-group">
                <button type="submit" style="background-color:#0A4BF0; color:#fff;" name="trade" class="btn btn-info btn-lg  btn-square btn-block text-white"><b>Trade</b></button>
            </div>
        </form>
    </div>
</div>
@endsection
