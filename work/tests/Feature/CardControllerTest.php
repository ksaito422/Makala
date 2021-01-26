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
        $this->other_user = User::find(2);
        $this->board = Board::first();
        $this->card = Card::first();
    }

    /**
     * @test
     */
    public function storeメソッドで自分のボードにカードを保存できる()
    {
        $url = route('card.store');

        $data = [
            'boardId' => $this->board->id,
            'cardContent' => 'test'
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
    public function storeメソッドで他人のボードにカードは保存できない()
    {
        $url = route('card.store');

        $data = [
            'boardId' => $this->board->id,
            'cardContent' => 'test'
        ];

        $response = $this->actingAs($this->other_user)
                         ->post($url, $data);

        // 指定したユーザーが認証されていることを確認
        $this->assertAuthenticatedAs($this->other_user);

        $response->assertStatus(404)
                 ->assertJsonFragment(['message' => '404 Not Found'])
                 ->assertJsonCount(1)
                 ->assertHeader('Content-Type', 'application/json');
    }

    /**
     * @test
     */
    public function updateメソッドで自分が所有するボードのカードを更新できる()
    {
        $url = route('card.update', ['card' => $this->card->id]);

        $data = [
            'cardContent' => 'content'
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
    public function updateメソッドで他人が所有するボードのカードは更新できない()
    {
        $url = route('card.update', ['card' => $this->card->id]);

        $data = [
            'cardContent' => 'content'
        ];

        $response = $this->actingAs($this->other_user)
                            ->put($url, $data);

        // 指定したユーザーが認証されていることを確認
        $this->assertAuthenticatedAs($this->other_user);

        $response->assertStatus(404)
                 ->assertJsonFragment(['message' => '404 Not Found'])
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
