import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlujoCajaComponent } from './flujo-caja/flujo-caja.component';

import { NavbarComponent } from './componentesNoticiero/navbar/navbar.component';
import { TitularesComponent } from './componentesNoticiero/titulares/titulares.component';
import { SelectorNoticiaComponent } from './componentesNoticiero/selector-noticia/selector-noticia.component';
import { LeerNoticiaComponent } from './componentesNoticiero/leer-noticia/leer-noticia.component';
import { FooterComponent } from './componentesNoticiero/footer/footer.component';
import { NoticieroComponent } from './noticiero/noticiero.component';
import { LoginComponent } from './componentesAdministrativo/login/login.component';
import { MantenedorNoticiasComponent } from './componentesAdministrativo/mantenedor-noticias/mantenedor-noticias.component';
import { MantenedorUsuariosComponent } from './componentesAdministrativo/mantenedor-usuarios/mantenedor-usuarios.component';
import { EditarNoticiaComponent } from './componentesAdministrativo/editar-noticia/editar-noticia.component';
import { EditarUsuarioComponent } from './componentesAdministrativo/editar-usuario/editar-usuario.component';
import { NavbarAdminComponent } from './componentesAdministrativo/navbar-admin/navbar-admin.component';
import { CreadorNoticiaComponent } from './componentesAdministrativo/creador-noticia/creador-noticia.component';
import { CreadorUsuariosComponent } from './componentesAdministrativo/creador-usuarios/creador-usuarios.component';
import { ConfiguracionComponent } from './componentesAdministrativo/configuracion/configuracion.component';
import { AdministrativoComponent } from './administrativo/administrativo.component';
import { DetalleTipoServicio } from './servicios/detalleTipo.service';
import { DetalleMesServicio } from './servicios/detalleMes.service';
import { DetalleAnioServicio } from './servicios/detalleAnio.service';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitularesComponent,
    SelectorNoticiaComponent,
    LeerNoticiaComponent,
    FooterComponent,
    NoticieroComponent,
    LoginComponent,

    FlujoCajaComponent,
    MantenedorNoticiasComponent,
    MantenedorUsuariosComponent,
    EditarNoticiaComponent,
    EditarUsuarioComponent,
    NavbarAdminComponent,
    CreadorNoticiaComponent,
    CreadorUsuariosComponent,
    ConfiguracionComponent,
    AdministrativoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['http://localhost:8000/'],
        blacklistedRoutes: ['example.com/examplebadroute/']
      }
    })
  ],
  providers: [
    DetalleTipoServicio,
    DetalleMesServicio,
    DetalleAnioServicio
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }