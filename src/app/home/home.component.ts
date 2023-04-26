import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DogCardComponent} from '../dog-card/dog-card.component';
import {DogService} from '../services/dog.service';

export interface Perro {
  nombre: string;
  raza: string;
  descripcion: string;
  foto: string;
  jefe?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DogCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  perros: Perro[] = [];

  constructor(private dogService: DogService) {
    this.perros = this.dogService.perros;
  }
}
