<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::get('/', function(){
    return redirect('/dashboard');
});

Route::middleware('auth')->group(function () {
    Route::controller(DashboardController::class)->group(function(){
        Route::get('/dashboard', 'dashboard')->name('dashboard');
        Route::get('/transactions', 'transactions')->name('transactions');
        Route::post('deposit', 'deposit')->name('deposit');
        Route::post('withdraw', 'withdraw')->name('withdraw');
    });

});

require __DIR__.'/auth.php';

