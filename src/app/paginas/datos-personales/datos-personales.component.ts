import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  // creamos un array para obtener los datos personales

  public personal_data: any[];

  constructor( private dataService:DataServiceService) { }

  ngOnInit() {
    //aqui usamos el suscribe para obtener los datos personales solos y meterlos en el personal_data
      this.dataService.getData().subscribe((datos:any[])  =>
      this.personal_data=(datos['datos_personales'])
       );


  
  }

}
