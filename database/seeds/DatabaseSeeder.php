<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
<<<<<<< HEAD
        //$this->call(TipoDetalleSeed::class);
        //$this->call(AnioTable::class);
        //$this->call(MesesTable::class);
=======
        // $this->call(UsersTableSeeder::class);
        $this->call(MesesTable::class);
        $this->call(AnioTable::class);
        $this->call(TipoDetalleTable::class);
>>>>>>> bryanv
    }
}
