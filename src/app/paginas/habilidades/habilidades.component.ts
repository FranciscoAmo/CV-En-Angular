import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

public skills:any[];
public skill:string;

  constructor( private dataService:DataServiceService) { }

  ngOnInit() {

    this.dataService.getData().subscribe((datos:any[])  =>{
     this.skills=(datos['habilidades']);

 

     //para poner el color segun el valor
     for(let barra of this.skills){
       let valor_skill:number=parseInt(barra['valor']);

      barra.color=this.coloresBarras(barra['valor']);

      // como ya tenemos creada la variable que devuelve la clase que queremos
      // ponemos un NgClass en el html y [ngClass]="(barra.color)"
     }
    }
  );


  }

  //metodo par colorear segun el porcentaje de barra
   coloresBarras(valor:number){
    let color_class:any;
    if(valor>=60){
        color_class="progress-bar-success";
        
    }else if(valor<60 && valor>20){
      color_class="progress-bar-warning";
      
    }else{
      color_class="progress-bar-danger";
     
    }
    return color_class;
  }

}
