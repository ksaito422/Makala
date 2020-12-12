<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\Card;

class Board extends Model
{
    public function cards()
    {
        return $this->hasMany(Card::class);
    }
}
