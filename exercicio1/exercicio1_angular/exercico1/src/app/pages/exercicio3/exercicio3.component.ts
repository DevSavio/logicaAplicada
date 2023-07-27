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

  private realizarMultiplicacaoA(): number | null {
    return this.camposSaoValidos()
      ? this.pao * 0.35 && this.pao_de_queijo * 0.8 && this.broa * 1.5
      : null;
  }

  calcularArrecadacao() {
    if (this.camposForamAlterados()) {
      this.resultadoA = this.realizarMultiplicacaoA();
    }
  }

  private realizarMultiplicacaoI(): number | null {
    return (this.resultadoI = this.resultadoA! * 0.1);
  }

  calcularInvestimento() {
    if (this.camposForamAlterados()) {
      this.resultadoI = this.realizarMultiplicacaoI();
    }
  }

  private camposForamAlterados(): boolean {
    return this.pao !== undefined && this.broa !== undefined;
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
