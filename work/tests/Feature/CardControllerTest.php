<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\User;
use App\Model\Board;
use App\Model\Card;

class CardControllerTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
        $this->artisan('migrate:fresh --seed --env=testing');
        $this->user = User::first();
        $this->board = Board::first();
        $this->card = Card::first();
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

    /**
     * @test
     */
    public function showメソッドでカードを取得表示できる()
    {
        $url = route('cards.show', ['card' => $this->board->id]);

        $this->get($url)
            ->assertOk()
            ->assertSeeText('cards')
            ->assertJsonFragment(['board_id' => $this->board->id])
            ->assertHeader('Content-Type', 'application/json');
    }

    /**
     * @test
     */
    public function updateメソッドでカードを更新できる()
    {
        $url = route('cards.update', ['card' => $this->card->id]);

        $data = [
            'title' => 'title',
            'content' => 'content'
        ];

        $this->put($url, $data)
            ->assertOk()
            ->assertJsonFragment(['message' => 'カードの内容を変更しました。'])
            ->assertJsonCount(1)
            ->assertHeader('Content-Type', 'application/json');
    }

    /**
     * @test
     */
    public function destroyメソッドでカードを削除できる()
    {
        $url = route('cards.destroy', ['card' => $this->card->id]);

        $this->delete($url)
            ->assertOk()
            ->assertJsonFragment(['message' => 'カードを削除しました。'])
            ->assertJsonCount(1)
            ->assertHeader('Content-Type', 'application/json');
    }
}
