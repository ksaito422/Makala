<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\User;

class AccountControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();
        $this->artisan('migrate:fresh --seed --env=testing');
        $this->user = User::first();
    }

    /**
     * @test
     */
    public function アカウント名を変更できる()
    {
        $url = route('changeName', ['user' => $this->user->id]);
        $data = [
            'name' => 'test update'
        ];

        // 認証外だと500エラーを返す つまりapiを利用できない
        $this->assertGuest()
             ->put($url, $data)
             ->assertStatus(500);

        // テストのためにログインする
        $response = $this->actingAs($this->user)
                         ->put($url, $data);

        // 指定したユーザーが認証されていることを確認
        $this->assertAuthenticatedAs($this->user);

        $response->assertOk()
                  ->assertJsonFragment(['message' => 'ユーザー名を変更しました。'])
                  ->assertJsonCount(1)
                  ->assertHeader('Content-Type', 'application/json');
    }
}
