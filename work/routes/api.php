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

Route::group(['middleware' => 'api'], function() {
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
        'store' => 'cards.store',
        'update' => 'cards.update',
        'destroy' => 'cards.destroy'
    ]);
});