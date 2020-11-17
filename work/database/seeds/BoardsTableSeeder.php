<?php

use Illuminate\Database\Seeder;
use App\Model\Board;

class BoardsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Board::class, 20)->create();
    }
}
