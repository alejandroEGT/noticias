<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Anios extends Model
{
    protected $table="anio";

    protected function traerAnios(){
        $mes = Anios::select([
            'id',
            'descripcion'
        ])
        ->where('activo', 's')
        ->get(); 
        return response()->json($mes);
    }
}
