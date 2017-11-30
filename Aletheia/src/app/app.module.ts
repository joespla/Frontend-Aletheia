import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import {APP_ROUTING} from './app.routes';

//Components
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdministradosComponent } from './components/administrados/administrados.component';
import { PermisoComponent } from './components/permiso/permiso.component';
import { VercontratosComponent } from './components/vercontratos/vercontratos.component';
import { CrearcontratosComponent } from './components/crearcontratos/crearcontratos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

//servicios
import { PermisosService } from './servicios/permisos.service';
import { UsuariosService } from './servicios/usuarios.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdministradosComponent,
    VercontratosComponent,
    CrearcontratosComponent,
    NavbarComponent,
    HomeComponent,
    PermisoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    PermisosService,
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
