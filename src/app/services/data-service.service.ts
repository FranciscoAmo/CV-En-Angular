import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

 

  //creamos la ruta para la carpeta assets donde estara el json
    private ruta_datos='./assets/datos.json';
    private datos:any;

  constructor( private http: HttpClient) {}
    //metodo para obtener los datos de la direccion

     public getData() {  

      return this.http.get(this.ruta_datos);

      //el suscribe lo realizaremos en cada constructor de la paggina ya que el json estan todos los datos juntos
    }
   
}
