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

    /**
     * @test
     */
    public function メールアドレスを変更できる()
    {
        $url = route('changeEmail', ['user' => $this->user->id]);

        // 正しいパスワード
        $data = [
            'email' => 'test@example.com',
            'password' => 'test1234',
            'new_email' => 'api_test@example.com'
        ];

        // 間違ったパスワード
        $fake_data = [
            'email' => 'test@example.com',
            'password' => 'fake_test1234',
            'new_email' => 'api_test@example.com'
        ];

        // 認証外だと500エラーを返す つまりapiを利用できない
        $this->assertGuest()
        ->put($url, $data)
        ->assertStatus(500);

        // テストのためにログインする
        $response = $this->actingAs($this->user);

        // 指定したユーザーが認証されていることを確認
        $this->assertAuthenticatedAs($this->user);

        // パスワードが違うと変更できない時のメッセージを返す
        $response->put($url, $fake_data)
                  ->assertJsonFragment(['message' => 'パスワードが違うため、メールアドレスを変更できませんでした。']);

        // 正しいパスワードで変更できる
        $response->put($url, $data)
                  ->assertOk()
                  ->assertJsonFragment(['message' => 'メールアドレスを変更しました。'])
                  ->assertJsonCount(1)
                  ->assertHeader('Content-Type', 'application/json');
    }
}
