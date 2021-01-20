<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\Board;

class User extends Model
{
    public function boards()
    {
        return $this->hasMany(Board::class);
    }
}
