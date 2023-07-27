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

  verificaValores(largura: number, comprimento: number) {
    if (this.largura == undefined && this.comprimento == undefined) {
      alert('Digite valores válidos para o calculo');
    }
  }

  calcularArea() {
    if (this.largura !== undefined && this.comprimento !== undefined) {
      this.resultado = this.largura * this.comprimento;
    } else {
      this.resultado = null;
    }
  }
}
