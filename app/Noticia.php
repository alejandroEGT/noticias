<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Noticia extends Model
{
    protected $table="noticia";


    protected function crear($r)
    {
    	$n = $this;

    	$n->titulo = $r->titulo;
    	$n->descripcion = $r->descripcion;
    	$n->fecha = $this->fecha($r->fecha);
    	$n->activo = 'S';
    	$n->categoria_id = $r->categoria_id;
    	$n->subcategoria_id = $r->subcategoria_id;
    	$n->user_id = $r->user_id;
    	$n->imagen = $this->imagen($r->file('imagen'));

    	if ($n->save()) {
    		return ['status'=>'success'];
    	}
    	return ['status'=>'error'];
    }

    protected function fecha($date){

    	return date("Y-m-d",strtotime($date));

    }

    protected function imagen($img)
    {
    	$name=$img->getClientOriginalName();
        
        if($img->move('storage/imagenes',$name)){
        	return 'storage/chatfotos/'.$name;
        }
        return null;

    }
}
