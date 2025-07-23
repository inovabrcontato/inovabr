<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    // Nombre de la tabla (por si no sigue la convención plural)
    protected $table = 'contacts';

    // Campos que se pueden asignar masivamente
    protected $fillable = [
        'name',
        'email',
        'message',
        'ip',
        'agent'
    ];

    // Si no usas los campos created_at y updated_at
    // public $timestamps = false;
}