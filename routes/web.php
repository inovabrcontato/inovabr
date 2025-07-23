<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ContatoSendController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Inicio');
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
});

Route::get('/começar', function () {
    return Inertia::render('Inicio');
});

Route::get('/sobreNos', function () {
    return Inertia::render('SobreNos');
});

Route::get('/serviços', function () {
    return Inertia::render('Servicios');
});

Route::get('/contato', function () {
    return Inertia::render('ContactForm');
});
Route::post('/verify', [ContatoSendController::class, 'verify'])->name('verify');
Route::post('/contato-send', [ContatoSendController::class, 'index'])->name('contato.send');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
