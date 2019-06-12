import { DetalleTipo } from "../modelos/detalleTipo.model";

export class DetalleTipoServicio{

    tipoServicioIngreso: DetalleTipo[]= [
      new DetalleTipo(1,"ingreso por venta"),
      new DetalleTipo(2,"actividades de inversion"),
      new DetalleTipo(3,"actividades de financiamiento"),
      new DetalleTipo(4,"caja libre")  
    ];

    tipoServicioEgreso: DetalleTipo[]= [
      new DetalleTipo(1,"cobros por giro"),
      new DetalleTipo(2,"cobros a corto plazo"),
      new DetalleTipo(3,"cobro a largo plazo")  
    ];
}
