import { Component } from '@angular/core';
import { Distancia } from './distancia';  

@Component({
  selector: 'app-distancia',
  standalone: false,
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;

  resultado: number = 0;

  calcular(): void {
      const calculos = new Distancia();
      calculos.calcular(this.x1, this.y1, this.x2, this.y2);
      this.resultado = calculos.resultado;
  }
}