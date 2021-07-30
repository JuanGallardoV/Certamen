<?php

namespace App\Http\Controllers;
use App\Models\Registro;
use Illuminate\Http\Request;

class MedicionesController extends Controller
{
     public function getMedi(){
        $medi = array();
        $i=0;
        while($i<11){
            $medi[] = $i;
            $i++;
        }
        return $medi;
        }
    public function getMediciones(){
        $mediciones = Registro::all();
        return $mediciones;
    }

    public function save(Request $request){
        $input  = $request->input();
        $fecha = $input["fecha"];
        $hora = $input["hora"];
        $medidor = $input["medidor"];
        $direccion = $input["direccion"];
        $valor = $input["valor"];
        $medida = $input["medida"];

        $medi = new Registro();
        $medi->fecha = $fecha;
        $medi->hora = $hora;
        $medi->medidor = $medidor;
        $medi->direccion = $direccion;
        $medi->valor = $valor;
        $medi->medida = $medida;
        $medi->save();
        return $medi;
    }

    public function eliminarMedicion(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $medicion = Registro::findOrFail($id);
        $medicion->delete();
        return "ok";
    }
}
