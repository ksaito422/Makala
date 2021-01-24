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

        // ゲストユーザなのでメールアドレス変更できない時のメッセージを返す
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
    public function ゲストユーザーならパスワードを変更できない()
    {
        $url = route('changePassword', ['user' => $this->guest->id]);

        // 正しいパスワード
        $data = [
            'email' => 'guest@example.com',
            'password' => 'guest1234',
            'new_Password' => 'guest12345678'
        ];

        // 認証外だと500エラーを返す つまりapiを利用できない
        $this->assertGuest()
        ->put($url, $data)
        ->assertStatus(500);

        // テストのためにログインする
        $response = $this->actingAs($this->guest);

        // 指定したユーザーが認証されていることを確認
        $this->assertAuthenticatedAs($this->guest);

        // ゲストユーザなのでパスワード変更できない時のメッセージを返す
        $response->put($url, $data)
                  ->assertStatus(403)
                  ->assertJsonFragment(['message' => 'ゲストユーザーのため変更できません。'])
                  ->assertJsonCount(1)
                  ->assertHeader('Content-Type', 'application/json');
    }
    /**
     * @test
     */
    public function 通常ユーザーならパスワードを変更できる()
    {
        $url = route('changePassword', ['user' => $this->user->id]);

        // 正しいパスワード
        $data = [
            'email' => 'test@example.com',
            'password' => 'test1234',
            'new_Password' => 'test12345678'
        ];

        // 間違ったパスワード
        $fake_data = [
            'email' => 'test@example.com',
            'password' => 'fake_test1234',
            'new_Password' => 'test12345678'
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
                  ->assertJsonFragment(['message' => 'パスワードが違うため、パスワードを変更できませんでした。']);

        // 正しいパスワードで変更できる
        $response->put($url, $data)
                  ->assertOk()
                  ->assertJsonFragment(['message' => 'パスワードを変更しました。'])
                  ->assertJsonCount(1)
                  ->assertHeader('Content-Type', 'application/json');
    }

    /**
     * @test
     */
    public function ゲストユーザーのアカウントは削除できない()
    {
        $url = route('accountRelease', ['user' => $this->guest->id]);

        // 正しいパスワード
        $data = [
            'email' => 'guest@example.com',
            'password' => 'guest1234',
        ];

        // 認証外だと500エラーを返す つまりapiを利用できない
        $this->assertGuest()
             ->delete($url, $data)
             ->assertStatus(500);

        // テストのためにログインする
        $response = $this->actingAs($this->guest);

        // 指定したユーザーが認証されていることを確認
        $this->assertAuthenticatedAs($this->guest);

        // ゲストユーザなのでアカウント削除できない時のメッセージを返す
        $response->delete($url, $data)
                  ->assertStatus(403)
                  ->assertJsonFragment(['message' => 'ゲストユーザーのため削除できません。'])
                  ->assertJsonCount(1)
                  ->assertHeader('Content-Type', 'application/json');
    }
    /**
     * @test
     */
    public function 通常ユーザーのアカウントを削除できる()
    {
        $url = route('accountRelease', ['user' => $this->user->id]);

        // 正しいパスワード
        $data = [
            'email' => 'test@example.com',
            'password' => 'test1234',
        ];
        // 間違ったパスワード
        $fake_data = [
            'email' => 'test@example.com',
            'password' => 'testtest',
        ];

        // 認証外だと500エラーを返す つまりapiを利用できない
        $this->assertGuest()
             ->delete($url, $data)
             ->assertStatus(500);

        // テストのためにログインする
        $response = $this->actingAs($this->user);

        // 指定したユーザーが認証されていることを確認
        $this->assertAuthenticatedAs($this->user);

        // パスワードが違うと削除できない時のメッセージを返す
        $response->delete($url, $fake_data)
                 ->assertStatus(401)
                 ->assertJsonFragment(['message' => 'パスワードが違うため、退会できませんでした。']);

        // アカウント削除できる時のメッセージを返す
        $response->delete($url, $data)
                  ->assertOk()
                  ->assertJsonFragment(['message' => '退会しました。'])
                  ->assertJsonCount(1)
                  ->assertHeader('Content-Type', 'application/json');
    }
}
