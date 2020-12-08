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
    public function indexメソッドでカードを取得表示できる()
    {
        $url = route('card.index', ['card' => $this->board->board_name]);

        // 認証外だと500エラーを返す つまりapiを利用できない
        $this->assertGuest()
             ->get($url)
             ->assertStatus(500);

        $response = $this->actingAs($this->user)
                         ->get($url);

        // 指定したユーザーが認証されていることを確認
        $this->assertAuthenticatedAs($this->user);

        $response->assertOk()
                 ->assertSeeText('cards')
                 ->assertJsonFragment(['board_id' => $this->board->id])
                 ->assertHeader('Content-Type', 'application/json');
    }

    /**
     * @test
     */
    public function storeメソッドでカードを保存できる()
    {
        $url = route('card.store');

        $data = [
            'board_name' => $this->board->board_name,
            'card_name' => 'test',
            'card_content' => 'test'
        ];

        // 認証外だと500エラーを返す つまりapiを利用できない
        $this->assertGuest()
             ->post($url, $data)
             ->assertStatus(500);

        $response = $this->actingAs($this->user)
                         ->post($url, $data);

        // 指定したユーザーが認証されていることを確認
        $this->assertAuthenticatedAs($this->user);

        $response->assertStatus(201)
                 ->assertJsonFragment(['message' => '新しいカードを作成しました。'])
                 ->assertJsonCount(1)
                 ->assertHeader('Content-Type', 'application/json');
    }

    /**
     * @test
     */
    public function updateメソッドでカードを更新できる()
    {
        $url = route('card.update', ['card' => $this->card->id]);

        $data = [
            'card_name' => 'title',
            'card_content' => 'content'
        ];

        // 認証外だと500エラーを返す つまりapiを利用できない
        $this->assertGuest()
             ->put($url, $data)
             ->assertStatus(500);

        $response = $this->actingAs($this->user)
                            ->put($url, $data);

        // 指定したユーザーが認証されていることを確認
        $this->assertAuthenticatedAs($this->user);

        $response->assertOk()
                 ->assertJsonFragment(['message' => 'カードの内容を変更しました。'])
                 ->assertJsonCount(1)
                 ->assertHeader('Content-Type', 'application/json');
    }

    /**
     * @test
     */
    public function destroyメソッドでカードを削除できる()
    {
        $url = route('card.destroy', ['card' => $this->card->id]);

        // 認証外だと500エラーを返す つまりapiを利用できない
        $this->assertGuest()
             ->delete($url)
             ->assertStatus(500);

        $response = $this->actingAs($this->user)
                            ->delete($url);

        // 指定したユーザーが認証されていることを確認
        $this->assertAuthenticatedAs($this->user);

        $response->assertOk()
                 ->assertJsonFragment(['message' => 'カードを削除しました。'])
                 ->assertJsonCount(1)
                 ->assertHeader('Content-Type', 'application/json');
    }
}
