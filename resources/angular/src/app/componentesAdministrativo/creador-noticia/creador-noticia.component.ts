import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/modelos/noticia.model';

@Component({
  selector: 'app-creador-noticia',
  templateUrl: './creador-noticia.component.html',
  styleUrls: ['./creador-noticia.component.scss']
})
export class CreadorNoticiaComponent implements OnInit {

  noticia: Noticia={
    titulo: '',
    titular: '',
    descripcion: '',
    fecha: '',
    activo: true,
    categoria: 0,
    subcategoria: 0,
    usuario: 0,
    localidad: 0
  }

  constructor() { }

  ngOnInit() {
  }

  guardar(noticiaForm){

  }

  eliminar(){
    
  }

}
