<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\Board;

class Card extends Model
{
    public function board()
    {
        return $this->belongsTo(Board::class);
    }
}
