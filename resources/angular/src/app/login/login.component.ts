import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	email:string

  constructor() { }


  doLogin($email, $pass) {
        const endpoint = 'http://mi-api.com/login';
        const data = {
            username: $email,
            password: $pass
        };
        console.log(data)

        // En este ejemplo voy a usar promesas, pero puedes utilizar Observables si prefieres.
        // this.http.post(endpoint, data)
        //     .toPromise()
        //     .then(token => {
        //         // La variable 'result' dependerá de lo que tú envíes desde tu API, siempre y cuando el estátus de la respuesta no sea de error. Yo supondré que result es tu token.
        //         console.log(result);
        //         sessionStorage.setItem('token', token);
        //     })
        //     .catch(error => {
        //         console.error(error);
        //         alert('Ocurrió un error al iniciar sesión');
        //     });
    }

  ngOnInit() {
  }

}
