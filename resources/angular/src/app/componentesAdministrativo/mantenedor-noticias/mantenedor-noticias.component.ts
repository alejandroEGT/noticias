import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/modelos/noticia.model';

@Component({
  selector: 'app-mantenedor-noticias',
  templateUrl: './mantenedor-noticias.component.html',
  styleUrls: ['./mantenedor-noticias.component.scss']
})
export class MantenedorNoticiasComponent implements OnInit {

  noticias: Noticia[];
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

}
