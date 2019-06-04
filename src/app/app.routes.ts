import {Routes,RouterModule} from '@angular/router';
import { PresentacionComponent } from './paginas/presentacion/presentacion.component';
import { DatosPersonalesComponent } from './paginas/datos-personales/datos-personales.component';
import { ExperienciaComponent } from './paginas/experiencia/experiencia.component';
import { HabilidadesComponent } from './paginas/habilidades/habilidades.component';
import { EstudiosComponent } from './paginas/estudios/estudios.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { AptitudesComponent } from './paginas/aptitudes/aptitudes.component';
import { SeleccionComponent } from './paginas/seleccion/seleccion.component';
import { IdiomasYotrosComponent } from './paginas/idiomas-yotros/idiomas-yotros.component';

const APP_ROUTES: Routes=[
    {path:'Presentacion',component:PresentacionComponent},
    {path:'datos-personales',component:DatosPersonalesComponent},
    {path:'experiencia',component:ExperienciaComponent},    
    {path:'estudios',component:EstudiosComponent},
    {path:'Contacto',component:ContactoComponent},
    {path:'Aptitudes',component:AptitudesComponent},
    {path:'habilidades',component:HabilidadesComponent},
    {path:'seleccion',component:SeleccionComponent, 
    children:[
        {path:'habilidades',component:HabilidadesComponent},
        {path:'idiomasyOtros',component:IdiomasYotrosComponent},
    ]},

];
export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES,{useHash:true});


