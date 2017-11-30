import { Injectable } from '@angular/core';

@Injectable()
export class PermisosService {

  private permisos:any[] = [
    {
      nombre:"Banorte",
      img:"assets/img/banorte.jpg",
      descripcion:"Bloque finanzas",
      fecha:"2017-08-07",
      vence:"2018-01-01",
      status: "Pendiente"
    },
    {
      nombre:"IBM",
      img:"assets/img/ibm.png",
      descripcion:"Bloque educativo",
      fecha:"2017-08-07",
      vence:"2018-01-01",
      status: "Aprobado"
    },
    {
      nombre:"Amazon",
      img:"assets/img/amazon.png",
      descripcion:"Bloque preferencias",
      fecha:"2017-04-23",
      vence:"2018-01-01",
      status: "Aprobado"
    },
    {
      nombre:"Secretaria de hacienda y crédito público",
      img:"assets/img/hacienda.png",
      descripcion:"Bloque legal",
      fecha:"2017-07-28",
      vence:"2018-01-01",
      status: "Revocado"
    },
    {
      nombre:"Bancomer",
      img:"assets/img/bancomer.jpg",
      descripcion:"Bloque finanzas",
      fecha:"2017-08-31",
      vence:"2018-01-01",
      status: "Revocado"
    },
    {
      nombre:"Cinepolis",
      img:"assets/img/cinepolis.png",
      descripcion:"Bloque entretenimiento",
      fecha:"2017-10-21",
      vence:"2018-01-01",
      status: "Aprobado"
    },
    {
      nombre:"Santander",
      img:"assets/img/santander.png",
      descripcion:"Bloque finanzas",
      fecha:"2017-01-09",
      vence:"2018-01-01",
      status: "Aprobado"
    },
    {
      nombre:"Starbucks",
      img:"assets/img/starbucks.jpg",
      descripcion:"Bloque preferencias",
      fecha:"2017-06-017",
      vence:"2018-01-01",
      status: "Aprobado"
    },
    {
      nombre:"Hospital Angeles",
      img:"assets/img/angeles.png",
      descripcion:"Bloque salud",
      fecha:"2017-05-03",
      vence:"2018-01-01",
      status: "Aprobado"
    }
  ];
  constructor() {
    console.log("Funciona");
  }

  getPermisos():Permisos[]{
    return this.permisos;
  }

  getPermiso(idx: string){
    return this.permisos[idx];
  }
}

export interface Permisos{
  nombre: string;
  img: string;
  descripcion: string;
  fecha: string;
}
