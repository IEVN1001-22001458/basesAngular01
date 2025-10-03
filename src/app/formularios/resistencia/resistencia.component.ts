import { Component } from '@angular/core';
import { ResistenciaCalculos } from './resistencia-calculos'; 

@Component({
  selector: 'app-resistencia',
  standalone: false,
  templateUrl: './resistencia.component.html',
  styleUrl: './resistencia.component.css'
})

export class ResistenciaComponent {

  banda1: number | null = null;
  banda2: number | null = null;
  multiplicador: number | null = null;
  tolerancia: number | null = null;

  valor: number = 0;
  valorMax: number = 0;
  valorMin: number = 0;

  colorBanda1: string = '';
  colorBanda2: string = '';
  colorBanda3: string = '';
  colorTolerancia: string = '';
  
  colores: string[] = [
    'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'gray', 'white'
  ];
  nombresColores: string[] = [
    'Negro', 'Café', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Morado', 'Gris', 'Blanco'
  ];

  calcular(): void {
    if (this.banda1 === null || this.banda2 === null || this.multiplicador === null || this.tolerancia === null) {
      return; 
    }

    const calculos = new ResistenciaCalculos();
    calculos.calcularValores(this.banda1, this.banda2, this.multiplicador, this.tolerancia);
    
    this.valor = calculos.valor;
    this.valorMax = calculos.valorMax;
    this.valorMin = calculos.valorMin;

    this.colorBanda1 = this.colores[this.banda1];
    this.colorBanda2 = this.colores[this.banda2];
    
    let indexMultiplicador = 0;
    switch (this.multiplicador) {
      case 1: indexMultiplicador = 0; break; 
      case 10: indexMultiplicador = 1; break; 
      case 100: indexMultiplicador = 2; break; 
      case 1000: indexMultiplicador = 3; break; 
      case 10000: indexMultiplicador = 4; break; 
      case 100000: indexMultiplicador = 5; break; 
      case 1000000: indexMultiplicador = 6; break; 
    }
    this.colorBanda3 = this.colores[indexMultiplicador];

    this.colorTolerancia = this.tolerancia === 5 ? 'gold' : 'silver';
  }
}

