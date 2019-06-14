<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Meses extends Model
{
    protected $table="mes";

    protected function traerMeses(){
        $mes = Meses::select([
            'id',
            'descripcion as mes'
        ])
        ->where('activo', 's')
        ->get(); 
        return response()->json($mes);
    }
}
