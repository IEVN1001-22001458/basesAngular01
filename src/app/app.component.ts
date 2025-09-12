import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ari Flores';

  duplicarNumero(valor: number): number {
    return valor * 2;
  }
  pelicula = {
    titulo: 'Inception',
    anio: 2010,
    genero: 'Ciencia ficción',
  };
}
