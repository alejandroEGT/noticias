import { Component, OnInit } from '@angular/core';
import { DetalleTipo } from '../modelos/detalleTipo.model';
import { DetalleTipoServicio } from '../servicios/detalleTipo.service';
import { DetalleMes } from '../modelos/detalleMes.model';
import { DetalleMesServicio } from '../servicios/detalleMes.service';

@Component({
  selector: 'app-flujo-caja',
  templateUrl: './flujo-caja.component.html',
  styleUrls: ['./flujo-caja.component.scss']
})
export class FlujoCajaComponent implements OnInit {

  btnDetalle: boolean = false;
  btnTxt: string = "Ver";
  btnRadio: string = "ingreso";
  selectDetalleTipo: DetalleTipo[] = [];
  selectDetalleMes: DetalleMes[] = [];

  constructor (
    private detalleTipoServicio:DetalleTipoServicio,
    private detalleMesServicio:DetalleMesServicio
    ) { }

  ngOnInit() {
    this.selectDetalleTipo = this.detalleTipoServicio.tipoServicio;
    this.selectDetalleMes = this.detalleMesServicio.mesServicio;
  }

  btnMonto() {
    this.btnDetalle = !this.btnDetalle;

    if (this.btnDetalle == true) {
      this.btnTxt = "Ocultar";
    } else {
      this.btnTxt = "Ver";
    }

  }
  testing(evento){
    /*console.log(evento.target.value);
    if(evento.target.value === "ingreso"){
      console.log("llamando campos de ingreso");
    }else if(evento.target.value === "egreso"){
      console.log("llamando campos de egreso");
    }*/
  }
  
}

