import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AdministradosComponent } from './components/administrados/administrados.component';
import { PermisoComponent } from './components/permiso/permiso.component';
import { VercontratosComponent } from './components/vercontratos/vercontratos.component';
import { CrearcontratosComponent } from './components/crearcontratos/crearcontratos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'administrados', component: AdministradosComponent },
  { path: 'crearcontratos', component: CrearcontratosComponent },
  { path: 'vercontratos', component: VercontratosComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'permiso/:id', component: PermisoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
