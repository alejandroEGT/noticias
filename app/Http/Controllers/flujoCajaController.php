<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Meses;
use App\Anios;
use App\Caja;

class flujoCajaController extends Controller
{
    public function traerMeses(){
        $mes = Meses::traerMeses();
        return $mes;
    }
    public function traerAnios(){
        $anio = Anios::traerAnios();
        return $anio;
    }
    public function insertarCaja(Request $request){
        $caja = Caja::insertar($request);
        return $caja;
    }
    public function detalleCaja($año){
        
        $dteCaja = Caja::listar(2019);
        return $dteCaja;
    }
}
