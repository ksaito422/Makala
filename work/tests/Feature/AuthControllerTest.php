<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\User;

class AuthControllerTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
        $this->artisan('migrate:fresh --seed --env=testing');
        $this->user = User::first();
    }

    /**
     * @test
     */
    public function ログインできる()
    {
        $url = route('auth.login');

        // DBに存在しない偽物ユーザー
        $fake_user = [
            'email' => 'fake@example.com',
            'password' => 'password'
        ];
        // DBに存在するユーザー
        $real_user = [
            'email' => 'test-user@example.com',
            'password' => 'test1234'
        ];

        // トークンが返ってこない
        $this->post($url, $fake_user)
            ->assertJson(['error' => 'Unauthorized']);

        // トークンが返ってくる
        $this->post($url, $real_user)
            ->assertOk()
            ->assertJson(['access_token' => true])
            ->assertJsonCount(5)
            ->assertHeader('Content-Type', 'application/json');
    }

    /**
     * @test
     */
    public function ユーザー登録できる()
    {
        $url = route('auth.register');

        $user = [
            'name' => 'api_test',
            'email' => 'api_test@example.com',
            'password' => 'test1234'
        ];

        // トークンが返ってくる
        $this->post($url, $user)
            ->assertOk()
            ->assertJson(['access_token' => true])
            ->assertJsonCount(5)
            ->assertHeader('Content-Type', 'application/json');
    }
}
