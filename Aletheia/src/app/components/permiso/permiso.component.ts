import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PermisosService } from '../../servicios/permisos.service';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-permiso',
  templateUrl: './permiso.component.html'
})
export class PermisoComponent  {

  permiso:any = {};
  usuarios:any = {};

  loading:boolean = false;

  constructor(private activatedRoute: ActivatedRoute,private _permisosService: PermisosService,private _usuariosService: UsuariosService) {
                    this.activatedRoute.params.subscribe( params => {
                      this.permiso = this._permisosService.getPermiso( params['id'])
                    })

  }

  ngOnInit() {
    this.usuarios = this._usuariosService.getUsuarios();
  }

  ejecutar(){
      this.loading = true;

      setTimeout ( ()=> this.loading = false, 3000 )
  }
}
