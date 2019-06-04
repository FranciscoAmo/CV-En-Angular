import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//servicios
import {DataServiceService} from './services/data-service.service';
import {EmailService} from './services/email.service';

//componentes
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PresentacionComponent } from './paginas/presentacion/presentacion.component';
import { DatosPersonalesComponent } from './paginas/datos-personales/datos-personales.component';
import { ExperienciaComponent } from './paginas/experiencia/experiencia.component';
import { EstudiosComponent } from './paginas/estudios/estudios.component';
import { HabilidadesComponent } from './paginas/habilidades/habilidades.component';
import { AptitudesComponent } from './paginas/aptitudes/aptitudes.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { SeleccionComponent } from './paginas/seleccion/seleccion.component';
import { IdiomasYotrosComponent } from './paginas/idiomas-yotros/idiomas-yotros.component';

// enrutadores
import {APP_ROUTING} from './app.routes';
import { HttpClientModule, HttpClient } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    PresentacionComponent,
    DatosPersonalesComponent,
    ExperienciaComponent,
    EstudiosComponent,
    HabilidadesComponent,
    ContactoComponent,
    AptitudesComponent,
    SeleccionComponent,
    IdiomasYotrosComponent
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [
    DataServiceService,
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
