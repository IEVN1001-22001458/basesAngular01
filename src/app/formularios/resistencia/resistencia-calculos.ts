export class ResistenciaCalculos {

    valor: number = 0;
    valorMax: number = 0;
    valorMin: number = 0;

    calcularValores(banda1: number, banda2: number, multiplicador: number, tolerancia: number): void {
   
        this.valor = (banda1 * 10 + Number(banda2)) * multiplicador;
        const variacion = this.valor * (tolerancia / 100);

        this.valorMax = this.valor + variacion;
        this.valorMin = this.valor - variacion;
    }
}