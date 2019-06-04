import { Component } from '@angular/core';
import { DataServiceService } from './services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public datoService:DataServiceService){

    this.datoService.getData().subscribe( (datos: any[])=>{
      console.log(datos)
    });
  }
  title = 'CVFrancisco';
}
