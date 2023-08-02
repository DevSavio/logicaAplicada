import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio9',
  templateUrl: './exercicio9.component.html',
  styleUrls: ['./exercicio9.component.css'],
})
export class Exercicio9Component {
  camisaP!: number;
  camisaM!: number;
  camisaG!: number;
  somatoria: number | null = null;

  private camposSaoValidos(): boolean {
    return (
      this.camisaP !== undefined &&
      this.camisaM !== undefined &&
      this.camisaG !== undefined
    );
  }

  private realizarCalculo(camisaP: number, camisaM: number, camisaG: number) {
    const vP = 10;
    const vM = 12;
    const vG = 15;
    return this.camposSaoValidos()
      ? (this.somatoria = camisaP * vP + camisaM * vM + camisaG * vG)
      : null;
  }

  calcularTotal() {
    this.somatoria = this.realizarCalculo(
      this.camisaP,
      this.camisaM,
      this.camisaG
    );
  }

  limpar() {
    this.somatoria = null;
    this.camisaP = 0;
    this.camisaM = 0;
    this.camisaG = 0;
  }
}
