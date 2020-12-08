<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($name)
    {
        $cards = Board::where('board_name', $name)
                        ->first()
                        ->cards;
        return response()->json([
            'cards' => $cards
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
        $cards = new Card();
        $cards->board_id = $request->board_id;
        $cards->title = $request->title;
        $cards->content = $request->content;
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
        $card = Card::find($id);
        $card->title = $request->card_name;
        $card->content = $request->card_content;
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
