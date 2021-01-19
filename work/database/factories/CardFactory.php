<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Card;
use Faker\Generator as Faker;

$factory->define(Card::class, function (Faker $faker) {
    return [
        'board_id' => $faker->numberBetween($min = 1, $max = 5),
        'content' => $faker->name,
    ];
});
