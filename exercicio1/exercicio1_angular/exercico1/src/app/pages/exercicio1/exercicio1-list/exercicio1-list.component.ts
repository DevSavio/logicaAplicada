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

  private camposSaoValidos(): boolean {
    return this.largura !== undefined && this.comprimento !== undefined;
  }

  private realizarMultiplicacao(): number | null {
    return this.camposSaoValidos() ? this.largura * this.comprimento : null;
  }

  calcularArea() {
    this.resultado = this.realizarMultiplicacao();
  }
}
