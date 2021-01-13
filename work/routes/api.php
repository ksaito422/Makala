<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// 認証関係のルート
Route::group([
    'prefix' => 'auth',
    'middleware' => 'api'
], function() {
    Route::post('register', 'Api\AuthController@register')->name('auth.register');
    Route::post('login', 'Api\AuthController@login')->name('auth.login');
    Route::post('logout', 'Api\AuthController@logout')->name('auth.logout');
    Route::post('refresh', 'Api\AuthController@refresh')->name('auth.refresh');
    Route::post('me', 'Api\AuthController@me')->name('auth.me');
});


Route::group([
    'middleware' => 'api'
], function() {
    Route::get('/v1/boards/{user}', 'Api\BoardController@index')
        ->name('board.index');

    Route::apiResource('/v1/boards', 'Api\BoardController', ['except' => ['index', 'show']])
        ->names([
            'store' => 'board.store',
            'update' => 'board.update',
            'destroy' => 'board.destroy'
        ]);

    Route::get('/v1/cards/{card}', 'Api\CardController@index')
        ->name('card.index');

    Route::apiResource('/v1/cards', 'Api\CardController', ['except' => ['index', 'show']])
    ->names([
        'store' => 'card.store',
        'update' => 'card.update',
        'destroy' => 'card.destroy'
    ]);

    // アカウント名を変更するルート
    Route::put('/v1/account/name/{user}', 'Api\AccountController@changeName')
            ->name('changeName');
    // メールアドレスを変更するルート
    Route::put('/v1/account/email/{user}', 'Api\AccountController@changeEmail')
            ->name('changeEmail');
});