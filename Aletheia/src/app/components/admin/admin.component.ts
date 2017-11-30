import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

    usuarios:any[] = [];

  constructor( private _usuariosService:UsuariosService
  ) { }

  ngOnInit() {
    this.usuarios = this._usuariosService.getUsuarios();
  }

}
