<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\User;

class BoardControllerTest extends TestCase
{

    // use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->artisan('migrate:fresh --seed --env=testing');
        $this->user = User::first();
    }

    /**
     * @test
     */
    public function indexメソッドで自分の投稿だけ取得できる()
    {
        $url = route('board.index', ['user' => 1]);

        $this->get($url)
            ->assertOk()
            ->assertSeeText('boards')
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
}
