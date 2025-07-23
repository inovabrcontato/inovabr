<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactFail extends Model
{
    use HasFactory;

    // Nombre de la tabla (si no sigue la convención plural)
    protected $table = 'contact_fails';

    // Campos que se pueden asignar masivamente
    protected $fillable = [
        'ip',
        'agent',
        'score'
    ];

    // Desactivar timestamps si no los usas (por defecto están activos)
    public $timestamps = true;
}