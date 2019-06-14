<?php

use Illuminate\Database\Seeder;

class TipoDetalleTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tipo_detalle')->insert([
        	[ 'id' => '1', 'id_tipo'=> '1', 'descripcion' => 'Ingreso por ventas', 'activo'=>'s' ],
        	[ 'id' => '2', 'id_tipo'=> '1', 'descripcion' => 'Cobros de deudas', 'activo'=>'s' ],
        	[ 'id' => '3', 'id_tipo'=> '1', 'descripcion' => 'Otros cobros y/o prestamos', 'activo'=>'s' ],

        	[ 'id' => '4', 'id_tipo'=> '2', 'descripcion' => 'Compra de mercadería ', 'activo'=>'s' ],
        	[ 'id' => '5', 'id_tipo'=> '2', 'descripcion' => 'Salarios', 'activo'=>'s' ],
        	[ 'id' => '6', 'id_tipo'=> '2', 'descripcion' => 'Administración y ventas', 'activo'=>'s' ],
        	[ 'id' => '7', 'id_tipo'=> '2', 'descripcion' => 'Pago de Impuestos ', 'activo'=>'s' ],
        	[ 'id' => '8', 'id_tipo'=> '2', 'descripcion' => 'Pago de publicidad', 'activo'=>'s' ],
        	[ 'id' => '9', 'id_tipo'=> '2', 'descripcion' => 'Consumo de Luz', 'activo'=>'s' ],
        	[ 'id' => '10', 'id_tipo'=> '2', 'descripcion' => 'Consumo de agua', 'activo'=>'s' ],
        	[ 'id' => '11', 'id_tipo'=> '2', 'descripcion' => 'Consumo de telefono', 'activo'=>'s' ],
        	[ 'id' => '12', 'id_tipo'=> '2', 'descripcion' => 'Consumo de internet', 'activo'=>'s' ]
        ]);
    }
}
