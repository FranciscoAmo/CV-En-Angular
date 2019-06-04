import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

public estudios:any[];

  constructor(private dataService:DataServiceService) { }

  ngOnInit() {

    //aqui usamos el suscribe para obtener los datos personales solos y meterlos en el personal_data
    this.dataService.getData().subscribe((datos:any[])  =>
    this.estudios=(datos['estudios'])

  
     );

 

  }

}
