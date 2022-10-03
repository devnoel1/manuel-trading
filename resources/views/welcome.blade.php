@extends('layouts.app')

@section('app-content')
    @include('inc.navbar')
    <div class="main-home-content">
        <main class="main">
          <section class="sectio section_main-slider">
            <ul class="main-slider__list">
              <li class="main-slider__item main-slider__item_1">
                <div class="wrapper">
                  <h2>TRADE FOREX, CFD CRYPTO AND OPTIONS</h2>
                  <ul class="main-trade__list owl-carousel owl-theme">
                    <li class="main-trade__item">
                      <div class="main-trade-title">24/7 Non-stop trading</div>
                      <div class="main-trade-text">including weekends</div>
                    </li>
                    <li class="main-trade__item">
                      <div class="main-trade-title">
                        $<span data-md="">250</span> Minimum deposit
                      </div>
                      <div class="main-trade-text">affordable for everyone</div>
                    </li>
                    <li class="main-trade__item">
                      <div class="main-trade-title">$1 Minimum trade size</div>
                      <div class="main-trade-text">suitable for beginners</div>
                    </li>
                    <li class="main-trade__item">
                      <div class="main-trade-title">100+ Trading assets</div>
                      <div class="main-trade-text">
                        stocks, crypto, commodities
                      </div>
                    </li>
                  </ul>
                  <div class="btn-row">
                    <a href="{{ route('login') }}" class="ui white shade button h-auto mw-200 upper">START TRADING NOW</a>
                  </div>
                </div>
              </li>
              <li class="main-slider__item main-slider__item_2">
                <div class="wrapper">
                  <h2>Participate in our TVT Airdrop</h2>
                  <ul class="main-extra__list owl-carousel owl-theme">
                    <li class="main-extra__item">
                      <div class="main-extra-name">
                        Share your referral link
                      </div>
                    </li>
                    <li class="main-extra__item">
                      <div class="main-extra-name">
                        Get 20% back from your client deposits
                      </div>
                    </li>
                    <li class="main-extra__item">
                      <div class="main-extra-name">
                        Withdraw your earnings or trade and get even more profit
                      </div>
                    </li>
                  </ul>
                  <div class="btn-row">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdlMxezrbTktTIrjJj86dFZOSujBog-_BG9SD3abMY5Z9PqwQ/viewform"
                      class="ui white-1b71fa shade button h-auto mw-200 upper">Join Airdrop</a>
                  </div>
                </div>
              </li>
              <li class="main-slider__item main-slider__item_3">
                <div class="wrapper">
                  <h2>
                    THE BIG GIVEAWAY <span>Get 100% bonus & win prizes</span>
                  </h2>
                  <div class="btn-row">
                    <a href="giveaway.html" class="ui white-orange shade button h-auto mw-200 upper">Read more</a>
                  </div>
                </div>
              </li>
            </ul>
            <div class="main-slider-abs">
              <div class="wrapper">
                <div class="main-slider-decor">
                  <svg width="48" height="48" viewbox="0 0 48 48">
                    <circle cx="24" cy="24" r="22.5" class="main-circle-1"></circle>
                    <circle cx="24" cy="24" r="22.5" data-finish="0" data-start="141" class="main-circle-2 js-stroke">
                    </circle>
                  </svg>
                  <span><small class="main-current-slide"></small>/<small>3</small></span>
                </div>
              </div>
            </div>
          </section>
          <section class="section section_main-success">
            <div class="wrapper">
              <h2>3 Easy Steps to Your Success</h2>
              <ul class="main-success__list js-slider-991">
                <li class="main-success__item">
                  <div class="main-success-icon">
                    <span class="icon-success-1"><span class="path1"></span><span class="path2"></span><span
                        class="path3"></span><span class="path4"></span><span class="path5"></span><span
                        class="path6"></span><span class="path7"></span><span class="path8"></span><span
                        class="path9"></span><span class="path10"></span><span class="path11"></span><span
                        class="path12"></span><span class="path13"></span><span class="path14"></span><span
                        class="path15"></span><span class="path16"></span></span>
                  </div>
                  <h3>Sign up and get a gift!</h3>
                  <p>
                    Registration takes less <br />
                    than a minute
                  </p>
                </li>
                <li class="main-success__item">
                  <div class="main-success-icon">
                    <span class="icon-success-2"><span class="path1"></span><span class="path2"></span><span
                        class="path3"></span><span class="path4"></span><span class="path5"></span><span
                        class="path6"></span><span class="path7"></span><span class="path8"></span><span
                        class="path9"></span><span class="path10"></span><span class="path11"></span><span
                        class="path12"></span><span class="path13"></span><span class="path14"></span><span
                        class="path15"></span><span class="path16"></span><span class="path17"></span><span
                        class="path18"></span></span>
                  </div>
                  <h3>Fund your account</h3>
                  <p>
                    Transfer funds to your <br />
                    trading account and start trading
                  </p>
                </li>
                <li class="main-success__item">
                  <div class="main-success-icon">
                    <span class="icon-success-3"><span class="path1"></span><span class="path2"></span><span
                        class="path3"></span><span class="path4"></span><span class="path5"></span><span
                        class="path6"></span><span class="path7"></span><span class="path8"></span><span
                        class="path9"></span><span class="path10"></span><span class="path11"></span><span
                        class="path12"></span><span class="path13"></span><span class="path14"></span><span
                        class="path15"></span><span class="path16"></span><span class="path17"></span><span
                        class="path18"></span></span>
                  </div>
                  <h3>Forecast market direction</h3>
                  <p>
                    Open a trade in the right direction<br />
                    and earn!
                  </p>
                </li>
              </ul>
              <ul class="main-success-partners__list">
                <li class="main-success-partners__item">
                  <img src="assets/css/img/main/partner-2.png" alt="partner" />
                </li>
                <li class="main-success-partners__item">
                  <img src="assets/css/img/main/partner-4.png" alt="partner" />
                </li>
                <li class="main-success-partners__item">
                  <img src="assets/css/img/main/partner-5.png" alt="partner" />
                </li>
                <li class="main-success-partners__item">
                  <img src="assets/css/img/main/partner-3.png" alt="partner" />
                </li>
                <li class="main-success-partners__item">
                  <img src="assets/css/img/main/partner-10.png" alt="partner" />
                </li>
                <li class="main-success-partners__item">
                  <img src="assets/css/img/main/partner-9.png" alt="partner" />
                </li>
                <li class="main-success-partners__item">
                  <img src="assets/css/img/main/partner-1.png" alt="partner" />
                </li>
                <li class="main-success-partners__item">
                  <img src="assets/css/img/main/partner-6.png" alt="partner" />
                </li>
                <li class="main-success-partners__item">
                  <img src="assets/css/img/main/partner-7.png" alt="partner" />
                </li>
                <li class="main-success-partners__item">
                  <img src="assets/css/img/main/partner-8.png" alt="partner" />
                </li>
              </ul>
            </div>
          </section>
          <section class="section section_main-platform">
            <div class="wrapper">
              <div class="inner">
                <h2>Top-Notch Trading Platform</h2>
                <p>
                  Trade Crypto, Forex, CFDs and earn up to 95% extra income in
                  60 seconds on CoinTradeOptions platform. Copy trades of the
                  most successful traders and earn even more!
                </p>
              </div>
              <div class="main-platform">
                <div class="main-platform-box main-platform-box_1">
                  <div class="main-platform-info main-platform-info_1">
                    <a href="#" class="main-platform-btn"><span></span><span></span></a>
                    <div class="main-platform-hide">
                      Use Copy Trading tool to copy the most successful traders
                    </div>
                  </div>
                  <div class="main-platform-info main-platform-info_2">
                    <a href="#" class="main-platform-btn"><span></span><span></span></a>
                    <div class="main-platform-hide">
                      Monitor the candle and tick charts and forecast market
                      direction
                    </div>
                  </div>
                  <div class="main-platform-pic">
                    <img src="assets/css/img/main/platform-1.png" alt="platform" />
                  </div>
                </div>
                <div class="main-platform-box main-platform-box_2">
                  <div class="main-platform-info">
                    <a href="#" class="main-platform-btn"><span></span><span></span></a>
                    <div class="main-platform-hide">
                      Check your balance and select currency of your trading
                      account
                    </div>
                  </div>
                  <div class="main-platform-pic">
                    <img src="assets/css/img/main/platform-2.png" alt="platform" />
                  </div>
                </div>
                <div class="main-platform-box main-platform-box_3">
                  <div class="main-platform-info">
                    <a href="#" class="main-platform-btn"><span></span><span></span></a>
                    <div class="main-platform-hide">
                      Choose one of 100+ trading assets available for trading
                    </div>
                  </div>
                  <div class="main-platform-pic">
                    <img src="assets/css/img/main/platform-3.png" alt="platform" />
                  </div>
                </div>
                <div class="main-platform-box main-platform-box_4">
                  <div class="main-platform-info">
                    <a href="#" class="main-platform-btn"><span></span><span></span></a>
                    <div class="main-platform-hide">
                      Choose trade type and earn within 60 seconds!
                    </div>
                  </div>
                  <div class="main-platform-pic">
                    <img src="assets/css/img/main/platform-4.png" alt="platform" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="section section_main-step">
            <div class="wrapper">
              <div class="inner">
                <h2>No Previous Experience in Trading?</h2>
                <p>Just start copying the most successful traders!</p>
              </div>
              <div class="main-step-wrap">
                <ul class="main-step__list js-slider-991">
                  <li class="main-step__item">
                    <div class="main-step-icon"><span>Step 1</span></div>
                    <h3>Choose trader to copy trades</h3>
                    <p>
                      Select one or several traders from our most successful
                      traders.
                    </p>
                  </li>
                  <li class="main-step__item">
                    <div class="main-step-icon"><span>Step 2</span></div>
                    <h3>Monitor your earnings</h3>
                    <p>
                      You don't need to trade manually, just follow your balance
                      growing!
                    </p>
                  </li>
                  <li class="main-step__item">
                    <div class="main-step-icon"><span>Step 3</span></div>
                    <h3>Withdraw your profit</h3>
                    <p>
                      Request your withdrawal and get paid on your
                      cryptocurrency wallet anytime.
                    </p>
                  </li>
                </ul>
                <div class="main-step-pic">
                  <img src="assets/css/img/main/step-pic.png" alt="img" />
                </div>
              </div>
              <ul class="main-top-traider__list js-main-slider">
                <li class="main-top-traider__item">
                  <div class="main-top-traider-top">
                    <div class="main-top-traider-name">
                      <div class="main-top-traider-name__text">Jacob S.</div>
                      <div class="main-top-traider-name__icon">
                        <img src="assets/css/img/main/flag-2.svg" alt="flag" />
                      </div>
                    </div>
                    <div class="main-top-traider-copy">
                      <span>7891</span> copying right now
                    </div>
                  </div>
                  <div class="main-top-traider-bottom">
                    <div class="main-top-traider-percent">
                      <div>297%</div>
                      <div>Monthly gain</div>
                    </div>
                    <a href="register.html" class="btn">Follow</a>
                  </div>
                </li>
                <li class="main-top-traider__item">
                  <div class="main-top-traider-top">
                    <div class="main-top-traider-name">
                      <div class="main-top-traider-name__text">Valery N.</div>
                      <div class="main-top-traider-name__icon">
                        <img src="assets/css/img/main/flag-2.svg" alt="flag" />
                      </div>
                    </div>
                    <div class="main-top-traider-copy">
                      <span>3881</span> copying right now
                    </div>
                  </div>
                  <div class="main-top-traider-bottom">
                    <div class="main-top-traider-percent">
                      <div>252%</div>
                      <div>Monthly gain</div>
                    </div>
                    <a href="register.html" class="btn">Follow</a>
                  </div>
                </li>
                <li class="main-top-traider__item">
                  <div class="main-top-traider-top">
                    <div class="main-top-traider-name">
                      <div class="main-top-traider-name__text">John Z.</div>
                      <div class="main-top-traider-name__icon">
                        <img src="assets/css/img/main/flag-2.svg" alt="flag" />
                      </div>
                    </div>
                    <div class="main-top-traider-copy">
                      <span>3099</span> copying right now
                    </div>
                  </div>
                  <div class="main-top-traider-bottom">
                    <div class="main-top-traider-percent">
                      <div>146%</div>
                      <div>Monthly gain</div>
                    </div>
                    <a href="register.html" class="btn">Follow</a>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section class="section section_main-advantages">
            <div class="wrapper">
              <h2>CoinTradeOptions Advantages</h2>
              <ul class="main-advantage__list js-slider-991">
                <li class="main-advantage__item">
                  <div class="main-advantage-icon" style="font-size: 50px">
                    <span class="icon-advantage-1"><span class="path1"></span><span class="path2"></span><span
                        class="path3"></span><span class="path4"></span><span class="path5"></span><span
                        class="path6"></span><span class="path7"></span><span class="path8"></span><span
                        class="path9"></span><span class="path10"></span><span class="path11"></span></span>
                  </div>
                  <div class="main-advantage-text">
                    Guaranteed withdrawals processing <br />
                    within 1 hour
                  </div>
                </li>
                <li class="main-advantage__item">
                  <div class="main-advantage-icon" style="font-size: 52px">
                    <span class="icon-advantage-2"><span class="path1"></span><span class="path2"></span><span
                        class="path3"></span><span class="path4"></span><span class="path5"></span><span
                        class="path6"></span><span class="path7"></span><span class="path8"></span><span
                        class="path9"></span><span class="path10"></span><span class="path11"></span><span
                        class="path12"></span><span class="path13"></span><span class="path14"></span><span
                        class="path15"></span></span>
                  </div>
                  <div class="main-advantage-text">
                    Possibility to trade <br />
                    over weekends
                  </div>
                </li>
                <li class="main-advantage__item">
                  <div class="main-advantage-icon" style="font-size: 58px">
                    <span class="icon-advantage-3"><span class="path1"></span><span class="path2"></span><span
                        class="path3"></span><span class="path4"></span><span class="path5"></span><span
                        class="path6"></span><span class="path7"></span><span class="path8"></span><span
                        class="path9"></span></span>
                  </div>
                  <div class="main-advantage-text">
                    Wide range of funding and <br />
                    withdrawals methods
                  </div>
                </li>
                <li class="main-advantage__item">
                  <div class="main-advantage-icon" style="font-size: 55px">
                    <span class="icon-advantage-4"><span class="path1"></span><span class="path2"></span><span
                        class="path3"></span><span class="path4"></span></span>
                  </div>
                  <div class="main-advantage-text">
                    100% secured trading with the data protection
                  </div>
                </li>
                <li class="main-advantage__item">
                  <div class="main-advantage-icon" style="font-size: 45px">
                    <span class="icon-advantage-5"><span class="path1"></span><span class="path2"></span><span
                        class="path3"></span><span class="path4"></span></span>
                  </div>
                  <div class="main-advantage-text">
                    Guided trading facility with <br />
                    a help of skilled advisor
                  </div>
                </li>
                <li class="main-advantage__item">
                  <div class="main-advantage-icon" style="font-size: 47px">
                    <span class="icon-advantage-6"><span class="path1"></span><span class="path2"></span><span
                        class="path3"></span><span class="path4"></span><span class="path5"></span><span
                        class="path6"></span><span class="path7"></span><span class="path8"></span><span
                        class="path9"></span><span class="path10"></span><span class="path11"></span><span
                        class="path12"></span><span class="path13"></span></span>
                  </div>
                  <div class="main-advantage-text">
                    More than 10 000 trades, <br />
                    served daily
                  </div>
                </li>
                <li class="main-advantage__item">
                  <div class="main-advantage-icon" style="font-size: 50px">
                    <span class="icon-advantage-7"><span class="path1"></span><span class="path2"></span><span
                        class="path3"></span><span class="path4"></span><span class="path5"></span><span
                        class="path6"></span><span class="path7"></span><span class="path8"></span><span
                        class="path9"></span><span class="path10"></span></span>
                  </div>
                  <div class="main-advantage-text">Customer support 24/7</div>
                </li>
                <li class="main-advantage__item">
                  <div class="main-advantage-icon" style="font-size: 41px">
                    <span class="icon-advantage-8"><span class="path1"></span><span class="path2"></span><span
                        class="path3"></span><span class="path4"></span><span class="path5"></span><span
                        class="path6"></span><span class="path7"></span><span class="path8"></span><span
                        class="path9"></span><span class="path10"></span></span>
                  </div>
                  <div class="main-advantage-text">
                    Copy trades and earn even without <br />
                    any experience in trading
                  </div>
                </li>
              </ul>
              <div class="btn-row">
                <a href="register.html" class="btn btn_accent">Open account now</a>
              </div>
            </div>
          </section>
          <section class="section section_main-contest">
            <div class="wrapper">
              <div class="main-contest-wrap">
                <div class="main-contest-box">
                  <h2>Trading Contest</h2>
                  <p>
                    Take part in the competition every <br />
                    week and win up to
                  </p>
                  <div class="main-contest-count">$20K</div>
                  <div class="main-contest-pic">
                    <img src="assets/css/img/main/main-prize-1.png" alt="main prize" />
                  </div>
                  <div class="btn-row">
                    <a href="contest.html" class="ui white-orange shade button h-auto mw-200 upper">Join now</a>
                  </div>
                </div>
                <div class="main-contest-box">
                  <h2>Giveaway</h2>
                  <p>
                    Win prizes every month: Macbook Air,<br />
                    iPhone 11 PRO Max, Apple Watch, iPad Pro
                  </p>
                  <div class="main-contest-pic">
                    <img src="assets/css/img/main/main-prize-2.png" alt="main prize" />
                  </div>
                  <div class="btn-row">
                    <a href="giveaway.html" class="ui white-orange shade button h-auto mw-200 upper">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="section section_main-count wow">
            <div class="wrapper">
              <ul class="main-count__list">
                <li class="main-count__item">
                  <div class="main-count__numbers js-numbers js-count-animate" data-increment="17"
                    data-local="traders.traders">
                    1780
                  </div>
                  <div class="main-count__text">Active traders</div>
                </li>
                <li class="main-count__item">
                  <div class="main-count__numbers js-numbers js-count-animate" data-increment="7200"
                    data-local="traders.earned">
                    1091234
                  </div>
                  <div class="main-count__text">USD earned</div>
                </li>
                <li class="main-count__item">
                  <div class="main-count__numbers js-numbers js-count-animate" data-increment="18"
                    data-local="traders.average">
                    613
                  </div>
                  <div class="main-count__text">
                    Trader's average income in USD
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
      @include('inc.footer')
@endsection
