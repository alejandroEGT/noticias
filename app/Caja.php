<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Caja extends Model
{
    protected $table = "caja";

    protected function insertar($r)
    {
    	$i = $this;
    	$i->id_detalle = $r->id_detalle;
    	$i->id_mes = $r->id_mes;
    	$i->id_anio = $r->id_anio;
    	$i->monto = $r->monto;
    	$i->detalle = $r->detalle;
    	$i->activo = "S";
    	if ($i->save()) {
    		return ['status'=>'success', 'mensaje'=>'Insertado'];
    	}
    	return ['status'=>'error', 'mensaje'=>'No Insertado'];

    }
}
