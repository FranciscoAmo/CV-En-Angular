import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  redes_sociales=[
    {
      nombre:"Facebook",
      icon:"facebook",
      link:"https://facebook.com"
    },
    {
      nombre:"Linkedin",
      icon:"linkedin",
      link:"https://linkedin.com"
    },
    {
      nombre:"Twitter",
      icon:"twitter",
      link:"https://twitter.com"
    },


  ]

 public links:any[];

  constructor( private dataService:DataServiceService) { }

  ngOnInit() {
    this.dataService.getData().subscribe( datos=>{
      this.links=datos['social_networks'];
    });
  }

}
