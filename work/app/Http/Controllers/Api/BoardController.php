<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Model\Board;

class BoardController extends Controller
{
    /**
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($name)
    {
        $boards = User::where('name', $name)
                        ->first()
                        ->boards;
        return response()->json([
            'boards' => $boards
        ], 200, [], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $board = new Board();
        $board->user_id = $request->user_id;
        $board->board_name = $request->board_name;
        $board->save();
        return response()->json(['message' => '新しいボードを作成しました。']);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $board = Board::find($id);
        $board->board_name = $request->board_name;
        $board->save();
        return response()->json(['message' => 'ボード名を変更しました。']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $board = Board::find($id)
                        ->delete();
        return response()->json(['message' => 'ボードを削除しました。']);
    }
}
