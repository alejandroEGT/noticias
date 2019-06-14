import { HttpClient } from "@angular/common/http";

export class DetalleAnioServicio{
    
    constructor(private httpClient: HttpClient){

    }

    getAnios(ENDPOINT_URL:string){
        return this.httpClient.get(ENDPOINT_URL + "/traerAnios");
    }
    
}