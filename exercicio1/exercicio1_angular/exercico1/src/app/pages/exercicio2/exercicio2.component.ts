import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  templateUrl: './exercicio2.component.html',
  styleUrls: ['./exercicio2.component.css'],
})
export class Exercicio2Component {
  qtde_cavalos!: number;
  resultado: number | null = null;

  private camposSaoValidos(): boolean {
    return this.qtde_cavalos !== undefined;
  }

  private realizarMultiplicacao(qtde_cavalos: number): number | null {
    return this.camposSaoValidos() ? qtde_cavalos * 4 : null;
  }

  calcularFerraduras() {
    this.resultado = this.realizarMultiplicacao(this.qtde_cavalos);
  }

  limpar() {
    this.resultado = null;
    this.qtde_cavalos = 0;
  }
}
