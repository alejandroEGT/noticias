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

    protected function listar($anio)
    {	
    	$caja = $this;

    	//ingreso------------------------------------------
    	$ingreso = TipoDetalle::traer_por_filtro(1);//ingreso
    	
    	foreach ($ingreso as $i) {
    		for ($x=1; $x <= 12; $x++) { 
    			
    			$get_caja = $caja->select('monto')->where([
    				'id_mes'=> $x,
    				'id_detalle' => $i->id,
    				//'id_anio' => $anio,
    				'activo' => 'S'
    			])->first();

    			$i['mes_'.$x] = $get_caja['monto'];

    		}
    	}
    	//fin_ingreso----------------------------------------

    	//egresos--------------------------------------------

    	$egreso = TipoDetalle::traer_por_filtro(2);//egreso
    	
    	foreach ($egreso as $i) {
    		for ($x=1; $x <= 12; $x++) { 
    			
    			$get_caja = $caja->select('monto')->where([
    				'id_mes'=> $x,
    				'id_detalle' => $i->id,
    				//'id_anio' => $anio,
    				'activo' => 'S'
    			])->first();

    			$i['mes_'.$x] = $get_caja['monto'];

    		}
    	}
    

    	return [
    		'ingresos' => $ingreso,
    		'egresos' => $egreso
    	];
    	
    }
}
