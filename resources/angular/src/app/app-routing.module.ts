import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
	// {path:'**', pathMach: 'full', redirectTo: ''},
	
	{ path: '', component: InicioComponent ,
		 children: [
	      { path: 'login', component: LoginComponent },
	       { path: 'create', component: CreateComponent },
	    ]
	},
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
