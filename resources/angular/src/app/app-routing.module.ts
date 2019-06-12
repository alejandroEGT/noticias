import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticieroComponent } from './noticiero/noticiero.component';
import { TitularesComponent } from './componentesNoticiero/titulares/titulares.component';
import { LeerNoticiaComponent } from './componentesNoticiero/leer-noticia/leer-noticia.component';
import { SelectorNoticiaComponent } from './componentesNoticiero/selector-noticia/selector-noticia.component';
import { FlujoCajaComponent } from './flujo-caja/flujo-caja.component';
import { FlujoCajaComponent } from './flujo-caja/flujo-caja.component';
import { AdministrativoComponent } from './administrativo/administrativo.component';
import { LoginComponent } from './componentesAdministrativo/login/login.component';
import { MantenedorNoticiasComponent } from './componentesAdministrativo/mantenedor-noticias/mantenedor-noticias.component';
import { MantenedorUsuariosComponent } from './componentesAdministrativo/mantenedor-usuarios/mantenedor-usuarios.component';
import { EditarNoticiaComponent } from './componentesAdministrativo/editar-noticia/editar-noticia.component';
import { EditarUsuarioComponent } from './componentesAdministrativo/editar-usuario/editar-usuario.component';
import { CreadorNoticiaComponent } from './componentesAdministrativo/creador-noticia/creador-noticia.component';
import { CreadorUsuariosComponent } from './componentesAdministrativo/creador-usuarios/creador-usuarios.component';
import { ConfiguracionComponent } from './componentesAdministrativo/configuracion/configuracion.component';

const routes: Routes = [
	{ path: '', component: NoticieroComponent, children:[
    { path: '', component: TitularesComponent },
    { path: 'leer', component: LeerNoticiaComponent },
		{ path: 'selector', component: SelectorNoticiaComponent },
		// { path: 'flujoCaja', component: FlujoCajaComponent },
		{ path: 'selector', component: SelectorNoticiaComponent },
		{ path: 'flujoCaja', component: FlujoCajaComponent },
    { path: 'selector', component: SelectorNoticiaComponent }
  ]},
  { path: 'administracion', component: AdministrativoComponent, children:[
    { path: '', component: LoginComponent },
    { path: 'mantenedor-noticias', component: MantenedorNoticiasComponent },
    { path: 'mantenedor-usuarios', component: MantenedorUsuariosComponent },
    { path: 'editar-noticia/:id', component: EditarNoticiaComponent },
    { path: 'editar-usuario', component: EditarUsuarioComponent },
    { path: 'creador-noticia', component: CreadorNoticiaComponent },
    { path: 'creador-usuarios', component: CreadorUsuariosComponent },
    { path: 'configuracion', component: ConfiguracionComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
