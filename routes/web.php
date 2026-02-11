<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/start-quiz', function () {
    return Inertia::render('quiz/quiz-page');
})->name('start-quiz');
