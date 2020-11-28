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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// 認証関係のルート
Route::group([
    'prefix' => 'auth',
    'middleware' => 'api'
], function() {
    Route::post('login', 'Api\AuthController@login');
    Route::post('logout', 'Api\AuthController@logout');
    Route::post('refresh', 'Api\AuthController@refresh');
    Route::post('me', 'Api\AuthController@me');
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
});