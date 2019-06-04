import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {

  public aptitudes=[];


  constructor(private dataService:DataServiceService) { }

  ngOnInit() {

      //aqui usamos el suscribe para obtener los datos personales solos y meterlos en el personal_data
    this.dataService.getData().subscribe((datos:any[])  =>{
    this.aptitudes=(datos['Aptitudes']);

    
     //para poner el color segun el valor
     for(let barra of this.aptitudes){
      let valor_skill:number=parseInt(barra['valor']);

     barra.color=this.coloresBarras(valor_skill);

     console.log(barra.color);
     }
     }
     );
   

  }

  //metodo par colorear segun el porcentaje de barra
  coloresBarras(valor:number){
    let color_class:any;
    if(valor>=70){
        color_class="green";
        
    }else if(valor<70 ){
      color_class="yellow";
      
    }
    return color_class;
  }
}
