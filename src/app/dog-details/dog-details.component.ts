import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {DogService} from '../services/dog.service';
import {Perro} from '../home/home.component';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-dog-details',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.scss']
})
export class DogDetailsComponent implements OnInit{
  perro?: Perro;
  constructor(private route: ActivatedRoute,
              private dogService: DogService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const dogName = params.get('nombre');
      this.perro = this.dogService.perros.find(perro => perro.nombre === dogName);
    });
  }
}
