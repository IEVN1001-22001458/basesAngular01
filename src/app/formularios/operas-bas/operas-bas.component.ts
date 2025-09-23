import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  num1: string = '';
  num2: string = '';
  operacionSeleccionada: string = '';
  resultado: number | string = 0;

  sumar(): void {
    this.resultado = parseInt(this.num1) + parseInt(this.num2);
  }

  restar(): void {
    this.resultado = parseInt(this.num1) - parseInt(this.num2);
  }

  dividir(): void {
    if (parseInt(this.num2) === 0) {
      this.resultado = 'Error: No se puede dividir por cero';
    } else {
      this.resultado = parseInt(this.num1) / parseInt(this.num2);
    }
  }

  multiplicar(): void {
    this.resultado = parseInt(this.num1) * parseInt(this.num2);
  }

  calcular(): void {
    switch (this.operacionSeleccionada) {
      case 'suma':
        this.sumar();
        break;
      case 'resta':
        this.restar();
        break;
      case 'division':
        this.dividir();
        break;
      case 'multiplicacion':
        this.multiplicar();
        break;
    }
  }
}
