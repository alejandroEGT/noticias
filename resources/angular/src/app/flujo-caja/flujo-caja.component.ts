import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flujo-caja',
  templateUrl: './flujo-caja.component.html',
  styleUrls: ['./flujo-caja.component.scss']
})
export class FlujoCajaComponent implements OnInit {

  btn_detalle: boolean = false;
  btn_txt: string = "Ver";

  constructor() { }

  ngOnInit() {
  }

  btn_monto() {
    this.btn_detalle = !this.btn_detalle;

    if (this.btn_detalle == true) {
      this.btn_txt = "Ocultar";
    } else {
      this.btn_txt = "Ver";
    }

  }

}
