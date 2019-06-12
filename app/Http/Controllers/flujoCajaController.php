<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Meses;

class flujoCajaController extends Controller
{
    public function traerMeses(){
        $mes = Meses::traerMeses();
        return $mes;
    }
}
