import { DetalleTipo } from "../modelos/detalleTipo.model";

export class DetalleTipoServicio{

    tipoServicio: DetalleTipo[]= [
      new DetalleTipo(1,"ingreso por venta"),
      new DetalleTipo(2,"cobro por deudas")  
    ];
}