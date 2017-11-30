import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosService {

  private usuarios:any[] = [
    {
      nombre: "Jorge Espinosa Lara",
      curp: "EILJ940423HDFSRR04",
      email: "joespla2000@hotmail.com",
      password: "123",
      direccion: {
        calle: "Contoy",
        numeroExterior: "268",
        cp: "14200",
        pais: "Mexico"
      },
      fechaNacimiento: "23 abril 1994",
      telefono: "55-3267-5103",
      agregados: {
          tarjetaCredito:"**** **** **** 1234",
          tarjetaClubCinepolis:"**** **** **** 5678"
      }
    }
  ];
  constructor() {  }

  getUsuarios():any[]{
    return this.usuarios;
  }
}
