import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.css'],
})
export class Exercicio3Component {
  pao!: number;
  pao_de_queijo!: number;
  broa!: number;
  resultadoA: number | null = null;
  resultadoI: number | null = null;

  private camposSaoValidos(): boolean {
    return this.pao !== undefined && this.broa !== undefined;
  }

  private realizarMultiplicacaoA(
    pao: number,
    pao_de_queijo: number,
    broa: number
  ): number | null {
    return this.camposSaoValidos()
      ? pao * 0.35 && pao_de_queijo * 0.8 && broa * 1.5
      : null;
  }

  calcularArrecadacao() {
    this.resultadoA = this.realizarMultiplicacaoA(
      this.pao,
      this.pao_de_queijo,
      this.broa
    );
  }

  private realizarMultiplicacaoI(resultadoA: number): number | null {
    return (this.resultadoI = resultadoA! * 0.1);
  }

  calcularInvestimento(resultadoA: number) {
    this.resultadoI = this.realizarMultiplicacaoI(resultadoA);
  }

  limpar() {
    this.pao = 0;
    this.pao_de_queijo = 0;
    this.broa = 0;
    this.resultadoA = null;
  }

  limparI() {
    this.resultadoA = null;
    this.resultadoI = null;
  }
}
