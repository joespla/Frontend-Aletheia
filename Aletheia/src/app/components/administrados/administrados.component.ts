import { Component, OnInit } from '@angular/core';
import { PermisosService } from '../../servicios/permisos.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-administrados',
  templateUrl: './administrados.component.html'
})
export class AdministradosComponent implements OnInit {

  permisos:any[] = [];

  constructor( private _permisosService: PermisosService,
              private router: Router
  ) { }

  ngOnInit() {
    this.permisos = this._permisosService.getPermisos();
  }

  verPermiso( idx:number){
    this.router.navigate( ['/permiso', idx] )
  }

}
