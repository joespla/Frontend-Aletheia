import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-crearcontratos',
  templateUrl: './crearcontratos.component.html'
})
export class CrearcontratosComponent implements OnInit {

  usuarios:any = {};
  campos:boolean = false;
  loading:boolean = false;

  dias = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,
                          24,25,26,27,28,29,30,31,'-'];

  meses = ['enero','febrero','marzo','abril','mayo','junio','julio', 'agosto',
            'septiembre','octubre','noviembre','diciembre','-'];

  years = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, '-'];

  constructor(private _usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuarios = this._usuariosService.getUsuarios();
  }

  crearCampos(){
    console.log("Funciona");
    this.campos = true;
  }

  ejecutar(){
    this.loading = true;

    setTimeout ( ()=> this.loading = false, 3000 )
  }

}
