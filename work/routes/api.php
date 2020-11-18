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

Route::group(['middoleware' => 'api'], function() {
    Route::apiResource('/v1/boards', 'Api\BoardController')
        ->names([
            'index' => 'board.index',
            'store' => 'board.store',
            'show' => 'board.show',
            'update' => 'board.update',
            'destroy' => 'board.destroy'
        ]);
});