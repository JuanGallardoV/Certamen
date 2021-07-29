<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//Route::view("/cualquiercosa","nombreVista")->name("nombre");
Route::view("/","home")->name("home");
Route::view("/productos","productos")->name("productos");

/*
Crear un controler para cada vista
1.Hacer un attach shell a laravel
2.Posicionarse en la carpeta con cd
3.Poner: php artisan make:controller NombreController
4.Tener a mano el readme del profe.

*/