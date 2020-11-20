<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\User;
use App\Model\Card;

class CardControllerTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
        $this->artisan('migrate:fresh --seed --env=testing');
        $this->user = User::first();
        $this->board = Card::first();
    }

    /**
     * @test
     */
    public function storeメソッドでカードを保存できる()
    {
        $url = route('cards.store');

        $data = [
            'board_id' => 1,
            'title' => 'test',
            'content' => 'test'
        ];

        $this->post($url, $data)
            ->assertStatus(201)
            ->assertJsonFragment(['message' => '新しいカードを作成しました。'])
            ->assertJsonCount(1)
            ->assertHeader('Content-Type', 'application/json');
    }
}
