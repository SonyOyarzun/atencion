<?php

namespace App\Http\Controllers;

use App\Models\fila;
use Illuminate\Http\Request;

use App\Events\CajaEvent;
use App\Events\FilaEvent;

class FilaController extends Controller
{

    public function mostrar()
    {
        try {

            $contador = fila::select()->orderBy('id', 'DESC')->offset(0)->limit(3)->get();

            return $contador;
        } catch (\Throwable $th) {

            return $th->getMessage();
        }
    }

    public function obtener()
    {
        try {

            $contador = fila::select()->orderBy('id', 'DESC')->offset(0)->limit(1)->get();

            return $contador[0];

        } catch (\Throwable $th) {

            return $th->getMessage();
        }
    }

    public function aumentar(Request $request)
    {
        try {

            if (isset($request->posicion)) {

                $posicion = $request->posicion;

                $numero = $this->obtener();
                $contador = new fila();
                if (($numero->numero + 1) > 99) {
                    $contador->numero = 1;
                } else {
                    $contador->numero = $numero->numero + 1;
                }

                $contador->posicion = $posicion;
                $contador->created_at = now();
                $contador->updated_at = now();
                $contador->save();

                $caja = [$this->obtener()];

                $fila = [$this->mostrar()];

                broadcast(new CajaEvent($caja));

                broadcast(new FilaEvent($fila));


                return $this->obtener()->numero;
            } else {
                return ['title' => "Algo salio Mal!", 'text' => 'Debe ingresar una caja como posicion', 'icon' => "error", 'button' => "Aceptar"];
            }
        } catch (\Throwable $th) {

            return $th->getMessage();
        }
    }

    public function disminuir(Request $request)
    {
        try {
            $numero = $this->obtener();
            $contador = new fila();
            $contador->numero = $numero->numero - 1;
            $contador->created_at = now();
            $contador->updated_at = now();
            $contador->save();

            $caja = [$this->obtener()];

            $fila = [$this->mostrar()];

            broadcast(new CajaEvent($caja));

            broadcast(new FilaEvent($fila));

            return $this->obtener()->numero;
        } catch (\Throwable $th) {

            return $th->getMessage();
        }
    }
}
