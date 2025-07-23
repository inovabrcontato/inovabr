<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/contato-send', function (Request $request) {
    // Aquí puedes validar y guardar los datos
    return response()->json([
        'message' => 'Formulario recibido correctamente',
        'data' => $request->all()
    ]);
});
