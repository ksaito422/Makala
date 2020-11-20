<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\User;
use App\Model\Board;

class BoardControllerTest extends TestCase
{

    // use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->artisan('migrate:fresh --seed --env=testing');
        $this->user = User::first();
        $this->board = Board::first();
    }

    /**
     * @test
     */
    public function indexメソッドで自分の投稿だけ取得できる()
    {
        $url = route('board.index', ['user' => $this->user->id]);

        $this->get($url)
            ->assertOk()
            ->assertSeeText('boards')
            ->assertJsonFragment(['user_id' => $this->user->id])
            ->assertHeader('Content-Type', 'application/json');;
    }

    /**
     * @test
     */
    public function storeメソッドで投稿を保存する()
    {
        $url = route('board.store');

        $data = [
            'user_id' => $this->user->id,
            'board_name' => 'test'
        ];

        $this->post($url, $data)
            ->assertOk()
            ->assertJsonFragment(['message' => '新しいボードを作成しました。'])
            ->assertJsonCount(1)
            ->assertHeader('Content-Type', 'application/json');
    }

    /**
     * @test
     */
    public function updateメソッドでボード名を更新できる()
    {
        $url = route('board.update', ['board' => $this->board->id]);

        $data = [
            'board_name' => 'test update'
        ];

        $this->put($url, $data)
            ->assertOk()
            ->assertJsonFragment(['message' => 'ボード名を変更しました。'])
            ->assertJsonCount(1)
            ->assertHeader('Content-Type', 'application/json');
    }
}
