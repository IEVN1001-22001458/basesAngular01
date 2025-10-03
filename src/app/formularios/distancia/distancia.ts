export class Distancia {

    resultado: number = 0;

    calcular(x1: number, y1: number, x2: number, y2: number): void {
        
        const dX = x2 - x1;
        const dY = y2 - y1;

        const xCuadrado = dX * dX;
        const yCuadrado = dY * dY;

        const suma = xCuadrado + yCuadrado;

        this.resultado = Math.sqrt(suma);
    }
}