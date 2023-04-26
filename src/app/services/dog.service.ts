import { Injectable } from '@angular/core';
import {Perro} from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  perros: Perro[] = [
    {
      nombre: 'Boss',
      raza: 'pastor vasco',
      descripcion: 'Es un perro de 8 años que le gusta mucho ir al monte',
      foto: 'boss.jpg',
      jefe: 'Gaizka',
    },
    {
      nombre: 'Drogo',
      raza: 'ratonero',
      descripcion: 'Hermano pequeño de Boss un perro con mucha energia y ganas de jugar',
      foto: 'drogo.jpg',
    },
    {
      nombre: 'Folco',
      raza: 'braco de weimar',
      descripcion: 'Perro muy activo siempre con ganas de socializar',
      foto: 'folco.jpg',
      jefe: 'Maria',
    }
  ];

  constructor() {
    console.log(this.perros);
  }
}
