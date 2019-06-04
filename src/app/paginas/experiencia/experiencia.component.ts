import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public Experiencia:any[];

  constructor(private dataService:DataServiceService) { }

  ngOnInit() {

 //aqui usamos el suscribe para obtener los datos personales solos y meterlos en el personal_data
 this.dataService.getData().subscribe((datos:any[])  =>
 this.Experiencia=(datos['experiencias'])
  );

  }

}
