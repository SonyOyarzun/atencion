<?php

namespace App\Http\Controllers;

use App\Models\caja;
use Illuminate\Http\Request;

class CajaController extends Controller
{
    public function posicion()
    {
        try {

            $contador = caja::all();
      
            return $contador;

        } catch (\Throwable $th) {

            return $th->getMessage();

        }
    }
}
