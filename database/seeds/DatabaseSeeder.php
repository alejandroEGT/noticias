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
        $this->call(TipoDetalleSeed::class);
        $this->call(AnioTable::class);
        $this->call(MesesTable::class);
    }
}
