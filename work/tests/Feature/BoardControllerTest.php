<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\User;

class BoardControllerTest extends TestCase
{

    use RefreshDatabase;

    // public function setUp(): void
    // {
    //     parent::setUp();
    //     $this->artisan('migrate:fresh --seed --env=testing');
    //     // $this->user = User::first();
    // }

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
}
