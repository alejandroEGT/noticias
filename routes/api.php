<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('test', function(){
	return "prueba realizada";
});
Route::post('auth/login', 'AuthController@login');


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//CUANDO SE AUTORIZA UN USUARIO
Route::group(['middleware' => 'jwt.auth'], function(){

	  Route::get('auth/user', 'AuthController@user');
	  Route::post('auth/logout', 'AuthController@logout');

	  Route::get('auth/test', function(){
	  	

	  			$obj = [

	  				['nombre'=>'Alejandro', 'apellido'=>'Godoy', 'edad'=>'24', 'activo'=>'S',
	  				'datos'=>[
	  					'anio_nac'=>'29/11/1994', 'contacto'=>'99775566'
	  				]],
	  				['nombre'=>'KKCK', 'apellido'=>'KKCK', 'edad'=>'24', 'activo'=>'S'],
	  				['nombre'=>'KKCK', 'apellido'=>'KKCK', 'edad'=>'24', 'activo'=>'N']


	  			];
	  			

	  			return $obj;



	  });

	  //agregando rutas alejandro.
  	  require 'api/ale_api.php';

  	  //agregando rutas bryan.
  	  require 'api/bry_api.php';
});