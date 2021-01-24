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

        // ゲストユーザーと通常ユーザーを取得する
        $this->guest = User::find(1);
        $this->user = User::find(2);
    }

    /**
     * @test
     */
    public function ゲストユーザーならアカウント名を変更できない()
    {
        $url = route('changeName', ['user' => $this->guest->id]);
        $data = [
            'name' => 'test update'
        ];

        // 認証外だと500エラーを返す つまりapiを利用できない
        $this->assertGuest()
             ->put($url, $data)
             ->assertStatus(500);

        // テストのためにログインする
        $response = $this->actingAs($this->guest)
                         ->put($url, $data);

        // 指定したユーザーが認証されていることを確認
        $this->assertAuthenticatedAs($this->guest);

        $response->assertStatus(403)
                  ->assertJsonFragment(['message' => 'ゲストユーザーのため変更できません。'])
                  ->assertJsonCount(1)
                  ->assertHeader('Content-Type', 'application/json');
    }

    /**
     * @test
     */
    public function 通常ユーザーならアカウント名を変更できる()
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
    public function ゲストユーザーならメールアドレスを変更できない()
    {
        $url = route('changeEmail', ['user' => $this->guest->id]);

        // 正しいパスワード
        $data = [
            'email' => 'guest@example.com',
            'password' => 'guest1234',
            'newEmail' => 'api_test@example.com'
        ];

        // 認証外だと500エラーを返す つまりapiを利用できない
        $this->assertGuest()
             ->put($url, $data)
             ->assertStatus(500);

        // テストのためにログインする
        $response = $this->actingAs($this->guest);

        // 指定したユーザーが認証されていることを確認
        $this->assertAuthenticatedAs($this->guest);

        // 正しいパスワードで変更できる
        $response->put($url, $data)
                  ->assertStatus(403)
                  ->assertJsonFragment(['message' => 'ゲストユーザーのため変更できません。'])
                  ->assertJsonCount(1)
                  ->assertHeader('Content-Type', 'application/json');
    }
    /**
     * @test
     */
    public function 通常ユーザーならメールアドレスを変更できる()
    {
        $url = route('changeEmail', ['user' => $this->user->id]);

        // 正しいパスワード
        $data = [
            'email' => 'test@example.com',
            'password' => 'test1234',
            'newEmail' => 'api_test@example.com'
        ];

        // 間違ったパスワード
        $fake_data = [
            'email' => 'test@example.com',
            'password' => 'fake_test1234',
            'newEmail' => 'api_test@example.com'
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

    /**
     * @test
     */
    // public function パスワードを変更できる()
    // {
    //     $url = route('changePassword', ['user' => $this->user->id]);

    //     // 正しいパスワード
    //     $data = [
    //         'email' => 'test@example.com',
    //         'password' => 'test1234',
    //         'new_Password' => 'test12345678'
    //     ];

    //     // 間違ったパスワード
    //     $fake_data = [
    //         'email' => 'test@example.com',
    //         'password' => 'fake_test1234',
    //         'new_Password' => 'test12345678'
    //     ];

    //     // 認証外だと500エラーを返す つまりapiを利用できない
    //     $this->assertGuest()
    //     ->put($url, $data)
    //     ->assertStatus(500);

    //     // テストのためにログインする
    //     $response = $this->actingAs($this->user);

    //     // 指定したユーザーが認証されていることを確認
    //     $this->assertAuthenticatedAs($this->user);

    //     // パスワードが違うと変更できない時のメッセージを返す
    //     $response->put($url, $fake_data)
    //               ->assertJsonFragment(['message' => 'パスワードが違うため、パスワードを変更できませんでした。']);

    //     // 正しいパスワードで変更できる
    //     $response->put($url, $data)
    //               ->assertOk()
    //               ->assertJsonFragment(['message' => 'パスワードを変更しました。'])
    //               ->assertJsonCount(1)
    //               ->assertHeader('Content-Type', 'application/json');
    // }
}
