import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio5',
  templateUrl: './exercicio5.component.html',
  styleUrls: ['./exercicio5.component.css'],
})
export class Exercicio5Component {
  valor: number | null = null;
  combustivel: number | null = null;
  totalLitros: number | null = null;

  private camposSaoValidos(): boolean {
    return this.valor !== undefined && this.combustivel !== undefined;
  }

  private realizarCalculo(valor: number, combustivel: number): number | null {
    return this.camposSaoValidos() ? valor / combustivel : null;
  }

  calcularLitros() {
    this.totalLitros = this.realizarCalculo(this.valor!, this.combustivel!);
  }

  limpar() {
    this.valor = null;
    this.combustivel = null;
    this.totalLitros = null;
  }
}
