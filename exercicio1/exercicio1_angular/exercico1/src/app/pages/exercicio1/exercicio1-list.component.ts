import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio1-list',
  templateUrl: './exercicio1-list.component.html',
  styleUrls: ['./exercicio1-list.component.css'],
})
export class Exercicio1ListComponent {
  largura!: number;
  comprimento!: number;
  resultado: number | null = null;

  private camposSaoValidos(largura: number, comprimento: number): boolean {
    return largura !== undefined && comprimento !== undefined;
  }

  private realizarMultiplicacao(
    largura: number,
    comprimento: number
  ): number | null {
    return this.camposSaoValidos(largura, comprimento)
      ? largura * comprimento
      : null;
  }

  calcularArea() {
    this.resultado = this.realizarMultiplicacao(this.largura, this.comprimento);
  }
}
