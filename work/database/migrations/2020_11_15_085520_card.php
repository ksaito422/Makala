<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Card extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('card', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('board_id')->unsigned();
            $table->text('title');
            $table->text('content');

            $table->foreign('board_id')
                  ->references('id')
                  ->on('board_list');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('card');
    }
}
