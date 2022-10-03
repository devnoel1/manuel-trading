<header class="header">
    <div class="wrapper">
        <div class="header-wrap">
            <a href="{{ route('home') }}" class="logo"><img src="{{ asset('assets/css/img/main/logo.png') }}" alt="logo"></a>
            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="javascript:;" class="nav__link drop">How to start?</a>
                        <ul class="hide-cont">
                            <li><a href="{{ route('register') }}">Open an account</a></li>
                            <li><a href="account-types.html">Account types</a></li>
                            <li><a href="funding-withdrawals-methods.html">Payment options</a></li>
                            <li><a href="{{ route('faq') }}">FAQ</a></li>
                        </ul>
                    </li>
                    <li class="nav__item">
                        <a href="javascript:;" class="nav__link drop">Trading platform</a>
                        <ul class="hide-cont">
                            <li><a href="platform.html">Platform</a></li>
                            <li><a href="advantages.html">Advantages</a></li>
                        </ul>
                    </li>
                    <li class="nav__item">
                        <a href="javascript:;" class="nav__link drop">Specials</a>
                        <ul class="hide-cont">
                            <li><a href="contest.html">Trading contest</a></li>
                            <li><a href="referral.html">Referrals</a></li>
                        </ul>
                    </li>
                    <li class="nav__item">
                        <a href="giveaway.html" class="nav__link_giveaway">Giveaway</a>
                    </li>
                </ul>
                <div class="nav__info">
                    <div class="nav-btns">
                       @if (Auth::check())
                       <a href="{{ route('dashboard') }}" class="btn btn_login">Dashboard</a>
                        @else
                        <a href="{{ route('login') }}" class="btn btn_login">Login</a>
                        <a href="{{ route('register') }}" class="btn btn_accent">Register</a>
                       @endif
                    </div>
                </div>
            </nav>
            <a href="javascript:;" class="hamburger js-hamburger">
                <span></span>
                <span></span>
                <span></span>
            </a>
        </div>
    </div>
</header>
