import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-idiomas-yotros',
  templateUrl: './idiomas-yotros.component.html',
  styleUrls: ['./idiomas-yotros.component.css']
})
export class IdiomasYotrosComponent implements OnInit {

 public cursos:any[];
 public idiomas:any[];

  constructor(private dataService:DataServiceService) { }

  ngOnInit() {

    this.dataService.getData().subscribe( datos=>{
      this.cursos=datos['cursos'];
      this.idiomas=datos['idiomas'];

    });
  }

}
