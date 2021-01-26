<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Model\Board;
use App\Model\Card;

class CardController extends Controller
{
    /**
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // JWT-Authのme()メソッドと同じ仕組み
        // BearerTokenを基にログインユーザーを特定し、ユーザーidを取得する
        $user_id = response()->json(auth()->user())->original->id;

        // 自分以外が所有するボードに対してカードを投稿できないように
        // ボードの所有者IDとトークンの持ち主を照合する
        $board = Board::find($request->boardId);
        $board_user_id = $board->user_id;
        if ($user_id !== $board_user_id) {
            return response()->json([
                'message' => '404 Not Found'
            ], 404, [], JSON_UNESCAPED_UNICODE);
        }

        $cards = new Card();
        $cards->board_id = $request->boardId;
        $cards->content = $request->cardContent;
        $cards->save();
        return response()->json([
            'message' => '新しいカードを作成しました。'
        ], 201, [], JSON_UNESCAPED_UNICODE);
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
        // JWT-Authのme()メソッドと同じ仕組み
        // BearerTokenを基にログインユーザーを特定し、ユーザーidを取得する
        $user_id = response()->json(auth()->user())->original->id;

        $card = Card::find($id);

        // 他ユーザーが所有するボードのカードを更新するのを防ぐ
        $board_user_id = $card->board->user_id;
        if ($user_id !== $board_user_id) {
            return response()->json([
                'message' => '404 Not Found'
            ], 404, [], JSON_UNESCAPED_UNICODE);
        }

        $card->content = $request->cardContent;
        $card->save();
        return response()->json([
            'message' => 'カードの内容を変更しました。'
        ], 200, [], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $card = Card::find($id)
                    ->delete();
        return response()->json([
            'message' => 'カードを削除しました。'
        ], 200, [], JSON_UNESCAPED_UNICODE);
    }
}
