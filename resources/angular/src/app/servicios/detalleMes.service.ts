import { HttpClient } from "@angular/common/http";

export class DetalleMesServicio{
  constructor(private httpClient: HttpClient){

  }

  getMeses(ENDPOINT_URL:string){
    return this.httpClient.get(ENDPOINT_URL + "/traerMeses");
  }
}