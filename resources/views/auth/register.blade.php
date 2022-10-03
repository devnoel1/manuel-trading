@extends('layouts.app')

@section('app-content')
    <div class="main-home-content">
        @include('inc.navbar')
        <section class="section section_account">
            <div class="tab-wrap tab-wrap_account">
                <div class="wrapper">
                    <ul class="nav-tab-list tabs">
                        <li class="nav-tab-list__item active">
                            <a href="#tab_1" class="nav-tab-list__link">Open an account</a>
                        </li>
                        <li class="nav-tab-list__item">
                            <a href="#tab_2" class="nav-tab-list__link">Account types</a>
                        </li>
                        <li class="nav-tab-list__item">
                            <a href="#tab_3" class="nav-tab-list__link">Funding & withdrawal methods</a>
                        </li>
                    </ul>
                </div>
                <div class="box-tab-cont">
                    <div class="tab-cont tab-cont_1" id="tab_1">
                        <form method="post" action="{{ route('register') }}" class="register-form"
                            style="overflow: visible;">
                            @csrf

                            <div class="line clearfix">
                                <div class="half-line">
                                    <input type="text" name="first_name"  placeholder="First Name"
                                        class="ng-pristine">
                                    @error('first_name')
                                        <div class="text-danger">{{ $message }}</div>
                                    @enderror
                                </div>
                                <div class="half-line">
                                    <input type="text" name="last_name"  placeholder="Last Name"
                                        class="ng-pristine">
                                    @error('last_name')
                                        <div class="text-danger">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="line clearfix">
                                <div class="">
                                    <input type="email" name="email" placeholder="Email"
                                        class="ng-pristine">
                                    @error('email')
                                        <div class="text-danger">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="line clearfix">
                                <div class="half-line">
                                    <input type="text" name="phone" placeholder="Phone Number"
                                        class="ng-pristine">
                                    @error('phone')
                                        <div class="text-danger">{{ $message }}</div>
                                    @enderror
                                </div>
                                <div class="half-line">
                                    <select name="country" dropdown="100" >
                                        <option value="">---Country---</option>
                                        <option value='Afghanistan'>Afghanistan</option>
                                        <option value='Albania'>Albania</option>
                                        <option value='Algeria'>Algeria</option>
                                        <option value='American Samoa'>American Samoa</option>
                                        <option value='Andorra'>Andorra</option>
                                        <option value='Angola'>Angola</option>
                                        <option value='Anguilla'>Anguilla</option>
                                        <option value='Antarctica'>Antarctica</option>
                                        <option value='Antigua and Barbuda'>Antigua and Barbuda</option>
                                        <option value='Argentina'>Argentina</option>
                                        <option value='Armenia'>Armenia</option>
                                        <option value='Aruba'>Aruba</option>
                                        <option value='Australia'>Australia</option>
                                        <option value='Austria'>Austria</option>
                                        <option value='Azerbaijan'>Azerbaijan</option>
                                        <option value='Bahamas'>Bahamas</option>
                                        <option value='Bahrain'>Bahrain</option>
                                        <option value='Bangladesh'>Bangladesh</option>
                                        <option value='Barbados'>Barbados</option>
                                        <option value='Belarus'>Belarus</option>
                                        <option value='Belgium'>Belgium</option>
                                        <option value='Belize'>Belize</option>
                                        <option value='Benin'>Benin</option>
                                        <option value='Bermuda'>Bermuda</option>
                                        <option value='Bhutan'>Bhutan</option>
                                        <option value='Bolivia'>Bolivia</option>
                                        <option value='Bosnia and Herzegovina'>Bosnia and Herzegovina</option>
                                        <option value='Botswana'>Botswana</option>
                                        <option value='Bouvet Island'>Bouvet Island</option>
                                        <option value='Brazil'>Brazil</option>
                                        <option value='British Indian Ocean Territory'>British Indian Ocean Territory
                                        </option>
                                        <option value='Brunei Darussalam'>Brunei Darussalam</option>
                                        <option value='Bulgaria'>Bulgaria</option>
                                        <option value='Burkina Faso'>Burkina Faso</option>
                                        <option value='Burundi'>Burundi</option>
                                        <option value='Cambodia'>Cambodia</option>
                                        <option value='Cameroon'>Cameroon</option>
                                        <option value='Canada'>Canada</option>
                                        <option value='Cape Verde'>Cape Verde</option>
                                        <option value='Cayman Islands'>Cayman Islands</option>
                                        <option value='Central African Republic'>Central African Republic</option>
                                        <option value='Chad'>Chad</option>
                                        <option value='Chile'>Chile</option>
                                        <option value='China'>China</option>
                                        <option value='Christmas Island'>Christmas Island</option>
                                        <option value='Cocos (Keeling) Islands'>Cocos (Keeling) Islands</option>
                                        <option value='Colombia'>Colombia</option>
                                        <option value='Comoros'>Comoros</option>
                                        <option value='Congo'>Congo</option>
                                        <option value='Cook Islands'>Cook Islands</option>
                                        <option value='Costa Rica'>Costa Rica</option>
                                        <option value='Croatia (Hrvatska)'>Croatia (Hrvatska)</option>
                                        <option value='Cuba'>Cuba</option>
                                        <option value='Cyprus'>Cyprus</option>
                                        <option value='Czech Republic'>Czech Republic</option>
                                        <option value='Denmark'>Denmark</option>
                                        <option value='Djibouti'>Djibouti</option>
                                        <option value='Dominica'>Dominica</option>
                                        <option value='Dominican Republic'>Dominican Republic</option>
                                        <option value='East Timor'>East Timor</option>
                                        <option value='Ecuador'>Ecuador</option>
                                        <option value='Egypt'>Egypt</option>
                                        <option value='El Salvador'>El Salvador</option>
                                        <option value='Equatorial Guinea'>Equatorial Guinea</option>
                                        <option value='Eritrea'>Eritrea</option>
                                        <option value='Estonia'>Estonia</option>
                                        <option value='Ethiopia'>Ethiopia</option>
                                        <option value='Falkland Islands (Malvinas)'>Falkland Islands (Malvinas)</option>
                                        <option value='Faroe Islands'>Faroe Islands</option>
                                        <option value='Fiji'>Fiji</option>
                                        <option value='Finland'>Finland</option>
                                        <option value='France'>France</option>
                                        <option value='France, Metropolitan'>France, Metropolitan</option>
                                        <option value='French Guiana'>French Guiana</option>
                                        <option value='French Polynesia'>French Polynesia</option>
                                        <option value='French Southern Territories'>French Southern Territories</option>
                                        <option value='Gabon'>Gabon</option>
                                        <option value='Gambia'>Gambia</option>
                                        <option value='Georgia'>Georgia</option>
                                        <option value='Germany'>Germany</option>
                                        <option value='Ghana'>Ghana</option>
                                        <option value='Gibraltar'>Gibraltar</option>
                                        <option value='Guernsey'>Guernsey</option>
                                        <option value='Greece'>Greece</option>
                                        <option value='1b71faland'>1b71faland</option>
                                        <option value='Grenada'>Grenada</option>
                                        <option value='Guadeloupe'>Guadeloupe</option>
                                        <option value='Guam'>Guam</option>
                                        <option value='Guatemala'>Guatemala</option>
                                        <option value='Guinea'>Guinea</option>
                                        <option value='Guinea-Bissau'>Guinea-Bissau</option>
                                        <option value='Guyana'>Guyana</option>
                                        <option value='Haiti'>Haiti</option>
                                        <option value='Heard and Mc Donald Islands'>Heard and Mc Donald Islands</option>
                                        <option value='Honduras'>Honduras</option>
                                        <option value='Hong Kong'>Hong Kong</option>
                                        <option value='Hungary'>Hungary</option>
                                        <option value='Iceland'>Iceland</option>
                                        <option value='India'>India</option>
                                        <option value='Isle of Man'>Isle of Man</option>
                                        <option value='Indonesia'>Indonesia</option>
                                        <option value='Iran (Islamic Republic of)'>Iran (Islamic Republic of)</option>
                                        <option value='Iraq'>Iraq</option>
                                        <option value='Ireland'>Ireland</option>
                                        <option value='Israel'>Israel</option>
                                        <option value='Italy'>Italy</option>
                                        <option value='Ivory Coast'>Ivory Coast</option>
                                        <option value='Jersey'>Jersey</option>
                                        <option value='Jamaica'>Jamaica</option>
                                        <option value='Japan'>Japan</option>
                                        <option value='Jordan'>Jordan</option>
                                        <option value='Kazakhstan'>Kazakhstan</option>
                                        <option value='Kenya'>Kenya</option>
                                        <option value='Kiribati'>Kiribati</option>
                                        <option value='Korea, Democratic People's Republic of'>Korea, Democratic People's
                                            Republic of</option>
                                        <option value='Korea, Republic of'>Korea, Republic of</option>
                                        <option value='Kosovo'>Kosovo</option>
                                        <option value='Kuwait'>Kuwait</option>
                                        <option value='Kyrgyzstan'>Kyrgyzstan</option>
                                        <option value='Lao People's Democratic Republic'>Lao People's Democratic Republic
                                        </option>
                                        <option value='Latvia'>Latvia</option>
                                        <option value='Lebanon'>Lebanon</option>
                                        <option value='Lesotho'>Lesotho</option>
                                        <option value='Liberia'>Liberia</option>
                                        <option value='Libyan Arab Jamahiriya'>Libyan Arab Jamahiriya</option>
                                        <option value='Liechtenstein'>Liechtenstein</option>
                                        <option value='Lithuania'>Lithuania</option>
                                        <option value='Luxembourg'>Luxembourg</option>
                                        <option value='Macau'>Macau</option>
                                        <option value='Macedonia'>Macedonia</option>
                                        <option value='Madagascar'>Madagascar</option>
                                        <option value='Malawi'>Malawi</option>
                                        <option value='Malaysia'>Malaysia</option>
                                        <option value='Maldives'>Maldives</option>
                                        <option value='Mali'>Mali</option>
                                        <option value='Malta'>Malta</option>
                                        <option value='Marshall Islands'>Marshall Islands</option>
                                        <option value='Martinique'>Martinique</option>
                                        <option value='Mauritania'>Mauritania</option>
                                        <option value='Mauritius'>Mauritius</option>
                                        <option value='Mayotte'>Mayotte</option>
                                        <option value='Mexico'>Mexico</option>
                                        <option value='Micronesia, Federated States of'>Micronesia, Federated States of
                                        </option>
                                        <option value='Moldova, Republic of'>Moldova, Republic of</option>
                                        <option value='Monaco'>Monaco</option>
                                        <option value='Mongolia'>Mongolia</option>
                                        <option value='Montenegro'>Montenegro</option>
                                        <option value='Montserrat'>Montserrat</option>
                                        <option value='Morocco'>Morocco</option>
                                        <option value='Mozambique'>Mozambique</option>
                                        <option value='Myanmar'>Myanmar</option>
                                        <option value='Namibia'>Namibia</option>
                                        <option value='Nauru'>Nauru</option>
                                        <option value='Nepal'>Nepal</option>
                                        <option value='Netherlands'>Netherlands</option>
                                        <option value='Netherlands Antilles'>Netherlands Antilles</option>
                                        <option value='New Caledonia'>New Caledonia</option>
                                        <option value='New Zealand'>New Zealand</option>
                                        <option value='Nicaragua'>Nicaragua</option>
                                        <option value='Niger'>Niger</option>
                                        <option value='Nigeria'>Nigeria</option>
                                        <option value='Niue'>Niue</option>
                                        <option value='Norfolk Island'>Norfolk Island</option>
                                        <option value='Northern Mariana Islands'>Northern Mariana Islands</option>
                                        <option value='Norway'>Norway</option>
                                        <option value='Oman'>Oman</option>
                                        <option value='Pakistan'>Pakistan</option>
                                        <option value='Palau'>Palau</option>
                                        <option value='Palestine'>Palestine</option>
                                        <option value='Panama'>Panama</option>
                                        <option value='Papua New Guinea'>Papua New Guinea</option>
                                        <option value='Paraguay'>Paraguay</option>
                                        <option value='Peru'>Peru</option>
                                        <option value='Philippines'>Philippines</option>
                                        <option value='Pitcairn'>Pitcairn</option>
                                        <option value='Poland'>Poland</option>
                                        <option value='Portugal'>Portugal</option>
                                        <option value='Puerto Rico'>Puerto Rico</option>
                                        <option value='Qatar'>Qatar</option>
                                        <option value='Reunion'>Reunion</option>
                                        <option value='Romania'>Romania</option>
                                        <option value='Russian Federation'>Russian Federation</option>
                                        <option value='Rwanda'>Rwanda</option>
                                        <option value='Saint Kitts and Nevis'>Saint Kitts and Nevis</option>
                                        <option value='Saint Lucia'>Saint Lucia</option>
                                        <option value='Saint Vincent and the Grenadines'>Saint Vincent and the Grenadines
                                        </option>
                                        <option value='Samoa'>Samoa</option>
                                        <option value='San Marino'>San Marino</option>
                                        <option value='Sao Tome and Principe'>Sao Tome and Principe</option>
                                        <option value='Saudi Arabia'>Saudi Arabia</option>
                                        <option value='Senegal'>Senegal</option>
                                        <option value='Serbia'>Serbia</option>
                                        <option value='Seychelles'>Seychelles</option>
                                        <option value='Sierra Leone'>Sierra Leone</option>
                                        <option value='Singapore'>Singapore</option>
                                        <option value='Slovakia'>Slovakia</option>
                                        <option value='Slovenia'>Slovenia</option>
                                        <option value='Solomon Islands'>Solomon Islands</option>
                                        <option value='Somalia'>Somalia</option>
                                        <option value='South Africa'>South Africa</option>
                                        <option value='South Georgia South Sandwich Islands'>South Georgia South Sandwich
                                            Islands</option>
                                        <option value='Spain'>Spain</option>
                                        <option value='Sri Lanka'>Sri Lanka</option>
                                        <option value='St. Helena'>St. Helena</option>
                                        <option value='St. Pierre and Miquelon'>St. Pierre and Miquelon</option>
                                        <option value='Sudan'>Sudan</option>
                                        <option value='Suriname'>Suriname</option>
                                        <option value='Svalbard and Jan Mayen Islands'>Svalbard and Jan Mayen Islands
                                        </option>
                                        <option value='Swaziland'>Swaziland</option>
                                        <option value='Sweden'>Sweden</option>
                                        <option value='Switzerland'>Switzerland</option>
                                        <option value='Syrian Arab Republic'>Syrian Arab Republic</option>
                                        <option value='Taiwan'>Taiwan</option>
                                        <option value='Tajikistan'>Tajikistan</option>
                                        <option value='Tanzania, United Republic of'>Tanzania, United Republic of</option>
                                        <option value='Thailand'>Thailand</option>
                                        <option value='Togo'>Togo</option>
                                        <option value='Tokelau'>Tokelau</option>
                                        <option value='Tonga'>Tonga</option>
                                        <option value='Trinidad and Tobago'>Trinidad and Tobago</option>
                                        <option value='Tunisia'>Tunisia</option>
                                        <option value='Turkey'>Turkey</option>
                                        <option value='Turkmenistan'>Turkmenistan</option>
                                        <option value='Turks and Caicos Islands'>Turks and Caicos Islands</option>
                                        <option value='Tuvalu'>Tuvalu</option>
                                        <option value='Uganda'>Uganda</option>
                                        <option value='Ukraine'>Ukraine</option>
                                        <option value='United Arab Emirates'>United Arab Emirates</option>
                                        <option value='United Kingdom'>United Kingdom</option>
                                        <option value='United States'>United States</option>
                                        <option value='United States minor outlying islands'>United States minor outlying
                                            islands</option>
                                        <option value='Uruguay'>Uruguay</option>
                                        <option value='Uzbekistan'>Uzbekistan</option>
                                        <option value='Vanuatu'>Vanuatu</option>
                                        <option value='Vatican City State'>Vatican City State</option>
                                        <option value='Venezuela'>Venezuela</option>
                                        <option value='Vietnam'>Vietnam</option>
                                        <option value='Virgin Islands (British)'>Virgin Islands (British)</option>
                                        <option value='Virgin Islands (U.S.)'>Virgin Islands (U.S.)</option>
                                        <option value='Wallis and Futuna Islands'>Wallis and Futuna Islands</option>
                                        <option value='Western Sahara'>Western Sahara</option>
                                        <option value='Yemen'>Yemen</option>
                                        <option value='Zaire'>Zaire</option>
                                        <option value='Zambia'>Zambia</option>
                                        <option value='Zimbabwe'>Zimbabwe</option>
                                    </select>
                                    @error('country')
                                        <div class="text-danger">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="line clearfix">
                                <div class="half-line">
                                    <input type="password" name="password"  placeholder="Password"
                                        class="ng-pristine">
                                    @error('password')
                                        <div class="text-danger">{{ $message }}</div>
                                    @enderror
                                </div>
                                <div class="half-line">
                                    <input type="password" name="password_confirmation"
                                        placeholder="Confirm Password" class="ng-pristine">
                                </div>
                            </div>
                            <div class="line clearfix" style="position: relative; margin-bottom: 25px;">
                                <div class="check-terms float-left">
                                    <input type="checkbox" id="confirm" ng-model="agree" checked=""
                                        class="ng-pristine ng-untouched ng-valid ng-empty"><label for="confirm"><i></i>
                                        <span class="ng-binding">I have read and agree to <a href="#"
                                                target="_blank">the Terms</a> and <a href="#" target="_blank">Risk
                                                statement</a></span></label>
                                    <input type="text" ng-="!agree" class="hidden-select">                                        >
                                </div>
                            </div>

                            <button class="ui button primal big mw-200" type="submit">
                                <span class="ng-binding">Sign Up</span> <span class="arrow-next">→</span>
                            </button>
                        </form>
                    </div>

                    <div class="tab-cont tab-cont_2 hide" id="tab_2">
                        <div class="wrapper" style="min-height:70vh;">
                            <div class="account-slider" id="js-nouislider"></div>
                            <ul class="account-type__list">
                                <li class="account-type__item">
                                    <div class="account-type-head">Bronze</div>
                                    <div class="account-type-cont">
                                        <ul class="account-type-cont__list">
                                            <li>24/7 live video chat support</li>
                                            <li>Withdrawals in 1 hour</li>
                                            <li>Bonus +20%</li>
                                            <li>Demo account</li>
                                            <li>Copy Trading tool</li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="account-type__item">
                                    <div class="account-type-head">Silver</div>
                                    <div class="account-type-cont">
                                        <ul class="account-type-cont__list">
                                            <li>24/7 live video chat support</li>
                                            <li>Withdrawals in 1 hour</li>
                                            <li>Bonus +50%</li>
                                            <li>Demo account</li>
                                            <li>Copy Trading tool</li>
                                            <li>Master class (web session)</li>
                                            <li>First 3 risk free trades <span>*</span></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="account-type__item">
                                    <div class="account-type-head">Gold</div>
                                    <div class="account-type-cont">
                                        <ul class="account-type-cont__list">
                                            <li>24/7 live video chat support</li>
                                            <li>Withdrawals in 1 hour</li>
                                            <li>Bonus +100%</li>
                                            <li>Demo account</li>
                                            <li>Copy Trading tool</li>
                                            <li>Master class (web session)</li>
                                            <li>First 3 risk free trades <span>*</span></li>
                                            <li>Personal success manager</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <div class="account-type-utils">
                                <ul class="account-utils__list">
                                    <li class="account-utils__item account-utils__item_inputs">
                                        <div class="account-utils-title">Your deposit</div>
                                        <div class="account-utils-cont">
                                            <input type="text" value="3 000" class="form-control js-utils-input">
                                            <span>USD</span>
                                        </div>
                                    </li>
                                    <li class="account-utils__item">
                                        <div class="account-utils-title">Bonus</div>
                                        <div class="account-utils-cont"><span>+<span
                                                    id="bonus-slide-value">100</span>%</span></div>
                                    </li>
                                    <li class="account-utils__item">
                                        <div class="account-utils-title">Total traiding deposit</div>
                                        <div class="account-utils-cont"><span id="bonus-slide-redesing">6000</span> USD
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="tab-cont tab-cont_3 hide" id="tab_3">
                        <div class="account-methods-banner">
                            <ul class="account-methods__list js-methods__slider">
                                <li class="account-methods__item">
                                    <div class="wrapper">
                                        <h3>Fast and reliable transfers supported by the most popular providers</h3>
                                        <ul class="account-methods-inner__list owl-carousel owl-theme">
                                            <li>
                                                <div class="account-methods-icon"><span class="icon-account-icon-1"><span
                                                            class="path1"></span><span class="path2"></span><span
                                                            class="path3"></span><span class="path4"></span><span
                                                            class="path5"></span><span class="path6"></span><span
                                                            class="path7"></span><span class="path8"></span><span
                                                            class="path9"></span><span class="path10"></span><span
                                                            class="path11"></span></span></div>
                                                <div class="account-methods-text">SSL certified</div>
                                            </li>
                                            <li>
                                                <div class="account-methods-icon"><span class="icon-account-icon-2"><span
                                                            class="path1"></span><span class="path2"></span><span
                                                            class="path3"></span><span class="path4"></span><span
                                                            class="path5"></span><span class="path6"></span><span
                                                            class="path7"></span><span class="path8"></span><span
                                                            class="path9"></span><span class="path10"></span><span
                                                            class="path11"></span><span class="path12"></span><span
                                                            class="path13"></span><span class="path14"></span><span
                                                            class="path15"></span><span class="path16"></span><span
                                                            class="path17"></span><span class="path18"></span><span
                                                            class="path19"></span></span></div>
                                                <div class="account-methods-text">Funds safety in Europe bank</div>
                                            </li>
                                            <li>
                                                <div class="account-methods-icon"><span class="icon-account-icon-3"><span
                                                            class="path1"></span><span class="path2"></span><span
                                                            class="path3"></span><span class="path4"></span><span
                                                            class="path5"></span><span class="path6"></span><span
                                                            class="path7"></span><span class="path8"></span><span
                                                            class="path9"></span><span class="path10"></span><span
                                                            class="path11"></span><span class="path12"></span><span
                                                            class="path13"></span><span class="path14"></span><span
                                                            class="path15"></span></span>
                                                </div>
                                                <div class="account-methods-text">3D Secure enable</div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="account-methods__item">
                                    <div class="wrapper">
                                        <h3>Guaranteed withdrawals processing in 1 hour</h3>
                                        <ul class="account-methods-inner__list  owl-carousel owl-theme">
                                            <li>
                                                <div class="account-methods-icon"><span class="icon-account-icon-1"><span
                                                            class="path1"></span><span class="path2"></span><span
                                                            class="path3"></span><span class="path4"></span><span
                                                            class="path5"></span><span class="path6"></span><span
                                                            class="path7"></span><span class="path8"></span><span
                                                            class="path9"></span><span class="path10"></span><span
                                                            class="path11"></span></span></div>
                                                <div class="account-methods-text">SSL certified</div>
                                            </li>
                                            <li>
                                                <div class="account-methods-icon"><span class="icon-account-icon-2"><span
                                                            class="path1"></span><span class="path2"></span><span
                                                            class="path3"></span><span class="path4"></span><span
                                                            class="path5"></span><span class="path6"></span><span
                                                            class="path7"></span><span class="path8"></span><span
                                                            class="path9"></span><span class="path10"></span><span
                                                            class="path11"></span><span class="path12"></span><span
                                                            class="path13"></span><span class="path14"></span><span
                                                            class="path15"></span><span class="path16"></span><span
                                                            class="path17"></span><span class="path18"></span><span
                                                            class="path19"></span></span></div>
                                                <div class="account-methods-text">Funds safety in Europe bank</div>
                                            </li>
                                            <li>
                                                <div class="account-methods-icon"><span class="icon-account-icon-3"><span
                                                            class="path1"></span><span class="path2"></span><span
                                                            class="path3"></span><span class="path4"></span><span
                                                            class="path5"></span><span class="path6"></span><span
                                                            class="path7"></span><span class="path8"></span><span
                                                            class="path9"></span><span class="path10"></span><span
                                                            class="path11"></span><span class="path12"></span><span
                                                            class="path13"></span><span class="path14"></span><span
                                                            class="path15"></span></span>
                                                </div>
                                                <div class="account-methods-text">3D Secure enable</div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="account-methods-table">
                            <div class="wrapper">
                                <div class="methods-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Method</th>
                                                <th>Regions covered</th>
                                                <th>Transfer fee <span>*</span></th>
                                                <th>Funding time <span>**</span></th>
                                                <th>Withdrawal time <span>***</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="td-hide">
                                                        Method
                                                    </div>
                                                    <div class="td-inner">
                                                        <div class="methods-table-pic" style="max-width: 103px;"><img
                                                                src="assets/css/img/main/methods-img-1.png"
                                                                alt="method"></div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="td-hide">
                                                        Regions covered
                                                    </div>
                                                    <div class="td-inner">
                                                        All
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="td-hide">
                                                        Transfer fee <span>*</span>
                                                    </div>
                                                    <div class="td-inner">
                                                        5%
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="td-hide">
                                                        Funding time <span>**</span>
                                                    </div>
                                                    <div class="td-inner">
                                                        Instant
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="td-hide">
                                                        Withdrawal time <span>***</span>
                                                    </div>
                                                    <div class="td-inner">
                                                        up to 1 hour
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="td-hide">
                                                        Method
                                                    </div>
                                                    <div class="td-inner">
                                                        <div class="methods-table-pic" style="max-width: 97px;"><img
                                                                src="assets/css/img/main/methods-img-2.png"
                                                                alt="method"></div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="td-hide">
                                                        Regions covered
                                                    </div>
                                                    <div class="td-inner">
                                                        All
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="td-hide">
                                                        Transfer fee <span>*</span>
                                                    </div>
                                                    <div class="td-inner">
                                                        no fee
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="td-hide">
                                                        Funding time <span>**</span>
                                                    </div>
                                                    <div class="td-inner">
                                                        Instant
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="td-hide">
                                                        Withdrawal time <span>***</span>
                                                    </div>
                                                    <div class="td-inner">
                                                        up to 1 hour
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="td-hide">
                                                        Method
                                                    </div>
                                                    <div class="td-inner">
                                                        <div class="methods-table-pic" style="max-width: 129px;"><img
                                                                src="assets/css/img/main/methods-img-3.png"
                                                                alt="method"></div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="td-hide">
                                                        Regions covered
                                                    </div>
                                                    <div class="td-inner">
                                                        All
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="td-hide">
                                                        Transfer fee <span>*</span>
                                                    </div>
                                                    <div class="td-inner">
                                                        no fee
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="td-hide">
                                                        Funding time <span>**</span>
                                                    </div>
                                                    <div class="td-inner">
                                                        Instant
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="td-hide">
                                                        Withdrawal time <span>***</span>
                                                    </div>
                                                    <div class="td-inner">
                                                        up to 1 hour
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="td-hide">
                                                        Method
                                                    </div>
                                                    <div class="td-inner td-inner_mod">
                                                        <div class="acoount-table-text">Altcoins</div>
                                                        <div class="methods-table-pic" style="max-width: 91px;"><img
                                                                src="assets/css/img/main/methods-img-4.png"
                                                                alt="method"></div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="td-hide">
                                                        Regions covered
                                                    </div>
                                                    <div class="td-inner">
                                                        All
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="td-hide">
                                                        Transfer fee <span>*</span>
                                                    </div>
                                                    <div class="td-inner">
                                                        no fee
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="td-hide">
                                                        Funding time <span>**</span>
                                                    </div>
                                                    <div class="td-inner">
                                                        Instant
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="td-hide">
                                                        Withdrawal time <span>***</span>
                                                    </div>
                                                    <div class="td-inner">
                                                        up to 1 hour
                                                    </div>
                                                </td>
                                            </tr>
                                            <!--	<tr>
                                                    <td>
                                                        <div class="td-hide">
                                                            Method
                                                        </div>
                                                        <div class="td-inner">
                                                            <div class="methods-table-pic" style="max-width: 135px;"><img
                                                                    src="/assets/css/img/main/methods-img-5.png" alt="method"></div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="td-hide">
                                                            Regions covered
                                                        </div>
                                                        <div class="td-inner">
                                                            All
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="td-hide">
                                                            Transfer fee <span>*</span>
                                                        </div>
                                                        <div class="td-inner">
                                                            no fee
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="td-hide">
                                                            Funding time <span>**</span>
                                                        </div>
                                                        <div class="td-inner">
                                                            up to 1 hour
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="td-hide">
                                                            Withdrawal time <span>***</span>
                                                        </div>
                                                        <div class="td-inner">
                                                            up to 1 hour
                                                        </div>
                                                    </td>
                                                </tr> -->
                                        </tbody>
                                    </table>
                                </div>
                                <ul class="methods-table-desc">
                                    <li><span>*</span> CoinTradeOptions doesn't charge transfer fee. However third-party fee
                                        may be applied.
                                    </li>
                                    <li><span>**</span> During weekends and public holidays, funding time may be delayed.
                                    </li>
                                    <li><span>***</span> Withdrawal time after confirmation.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection
