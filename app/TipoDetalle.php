<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TipoDetalle extends Model
{
    protected $table = "tipo_detalle";

    protected function traer_todo(){

    	return $this::all();
    }

     protected function traer_por_filtro($id){
     	//return $id;

    	return $this->select(['id','descripcion'])->where([
    		'id_tipo' => $id,
    		'activo' => 'S'
    	])->get();
    }
}
