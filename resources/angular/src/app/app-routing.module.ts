import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticieroComponent } from './noticiero/noticiero.component';
import { TitularesComponent } from './componentesNoticiero/titulares/titulares.component';
import { LeerNoticiaComponent } from './componentesNoticiero/leer-noticia/leer-noticia.component';
import { SelectorNoticiaComponent } from './componentesNoticiero/selector-noticia/selector-noticia.component';
import { FlujoCajaComponent } from './flujo-caja/flujo-caja.component';

const routes: Routes = [
	{ path: '', component: NoticieroComponent, children:[
    { path: '', component: TitularesComponent },
    { path: 'leer', component: LeerNoticiaComponent },
		{ path: 'selector', component: SelectorNoticiaComponent },
		{ path: 'flujoCaja', component: FlujoCajaComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
