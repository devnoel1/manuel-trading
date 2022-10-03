<?php

use App\Http\Controllers\admin\DepositeController as AdminDepositeController;
use App\Http\Controllers\admin\settingsController as AdminSettingsController;
use App\Http\Controllers\admin\TradeController as AdminTradeController;
use App\Http\Controllers\admin\WithdrawalController as AdminWithdrawalController;
use App\Http\Controllers\dashboardController;
use App\Http\Controllers\Payment;
use App\Http\Controllers\signalController;
use App\Http\Controllers\Trader\AccountController;
use App\Http\Controllers\Trader\DepositeController;
use App\Http\Controllers\Trader\SettingsController;
use App\Http\Controllers\Trader\TradeController;
use App\Http\Controllers\Trader\WithdrawalController;
use App\Http\Controllers\upgradeController;
use App\Http\Controllers\userController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::view('faq','faq')->name('faq');
Route::view('giveaway','giveaway')->name('giveaway');
Route::view('contest','contest');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [dashboardController::class, 'index'])->name('dashboard');

    Route::resource('deposite', DepositeController::class);
    Route::resource('withdrawal', WithdrawalController::class);
    Route::resource('trade', TradeController::class);
    Route::resource('account', AccountController::class);

    Route::get('settings', [SettingsController::class, 'index'])->name('settings');
    Route::post('change-password', [SettingsController::class, 'changePassword'])->name('change.password');
    Route::post('change-pics', [SettingsController::class, 'changePic'])->name('change.pics');

    Route::get('upgrade', [upgradeController::class, 'index'])->name('upgrade');
    Route::post('upgrade', [upgradeController::class, 'store'])->name('upgrade.store');

    Route::get('payment/{id}', [Payment::class, 'index'])->name('payment');
    Route::post('payment', [Payment::class, 'store'])->name('payment.store');

    Route::get('signal', [signalController::class, 'index'])->name('signal.index');
    Route::post('signal', [signalController::class, 'store'])->name('signal');

    Route::prefix('admin')->name('admin.')->group(function () {
        Route::post('credit/user/{id}', [AdminTradeController::class, 'credit'])->name('credit.user');
        Route::resource('trade', AdminTradeController::class);
        Route::resource('deposite', AdminDepositeController::class);
        Route::resource('withdrawal', AdminWithdrawalController::class);
        Route::resource('users',userController::class);

        Route::get('settings',[AdminSettingsController::class,'index'])->name('settings');
        Route::post('deposit-address',[AdminSettingsController::class,'depositAddress'])->name('deposit-address');
    });
});

require __DIR__ . '/auth.php';
