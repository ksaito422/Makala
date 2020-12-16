<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'guest',
                'email' => 'guest@example.com',
                'password' => \Hash::make('guest1234')
            ],
            [
                'name' => 'test',
                'email' => 'test@example.com',
                'password' => \Hash::make('test1234')
            ]
        ]);
    }
}
