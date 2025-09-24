import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  nombre: string = '';
  cantidadCompradores: number | null = null;
  tarjetaCineco: string = 'No'; 
  cantidadBoletas: number | null = null;

  resultado: string = '';

  private readonly PRECIO_BOLETA: number = 12; 

 
  procesarCompra(): void {
    if (!this.cantidadCompradores || this.cantidadCompradores <= 0 || !this.cantidadBoletas || this.cantidadBoletas <= 0) {
      this.resultado = "Por favor, ingrese valores válidos.";
      return;
    }

    const maxBoletasPermitidas = this.cantidadCompradores * 7; 

    if (this.cantidadBoletas > maxBoletasPermitidas) {
      this.resultado = `Error: solo se pueden comprar ${maxBoletasPermitidas} boletas para ${this.cantidadCompradores} compradores.`;
      return;
    }

    let subtotal = this.cantidadBoletas * this.PRECIO_BOLETA;
    let descuentoPorCantidad = 0;

    if (this.cantidadBoletas > 5) {
      descuentoPorCantidad = subtotal * 0.15; 

    } else if (this.cantidadBoletas >= 3 && this.cantidadBoletas <= 5) {
      descuentoPorCantidad = subtotal * 0.10; 
    }

    const totalConDescuento = subtotal - descuentoPorCantidad;
    let descuentoAdicionalCineco = 0;

    if (this.tarjetaCineco === 'Si') {
      descuentoAdicionalCineco = totalConDescuento * 0.10; 
    }

    const totalAPagar = totalConDescuento - descuentoAdicionalCineco;

    this.resultado = totalAPagar.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
  }

  limpiar(): void {
    this.nombre = '';
    this.cantidadCompradores = null;
    this.tarjetaCineco = 'No';
    this.cantidadBoletas = null;
    this.resultado = '';
  }
}