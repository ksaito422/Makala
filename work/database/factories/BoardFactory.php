<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Board;
use Faker\Generator as Faker;

$factory->define(Board::class, function (Faker $faker) {
    return [
        'user_id' => $faker->numberBetween($min = 1, $max = 2),
        'board_name' => $faker->name,
        'created_at' => $faker->datetime($max = 'now', $timezone = date_default_timezone_get()),
        'updated_at' => $faker->datetime($max = 'now', $timezone = date_default_timezone_get()),
    ];
});
