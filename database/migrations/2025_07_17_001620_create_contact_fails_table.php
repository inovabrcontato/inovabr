<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contact_fails', function (Blueprint $table) {
            $table->bigIncrements('id'); // Primary key auto-incremental
            $table->string('ip');
            $table->string('agent');
            $table->float('score', 3, 2); // Valores como 0.1, 0.5, 0.9
            $table->timestamps(); // created_at y updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contact_fails');
    }
};