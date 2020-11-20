<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Cards extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cards', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('board_id')->unsigned();
            $table->text('title');
            $table->text('content');
            $table->timestamps();

            $table->foreign('board_id')
                  ->references('id')
                  ->on('boards')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cards');
    }
}
