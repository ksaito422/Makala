<?php

use Illuminate\Database\Seeder;
use App\Model\Card;

class CardsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Card::class, 50)->create();
    }
}
