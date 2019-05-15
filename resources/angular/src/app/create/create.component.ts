import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  
  name:string;
  email:string;
  pass:string;
  rpass:string;

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }


  create(){
  	const data = {
  		name: this.name, email: this.email, pass: this.pass
  	};		
    //tampoco borrar este console.log :)
    console.log(this.name);

      //no borrar este console log :)
  	  console.log(data);

  }
}
