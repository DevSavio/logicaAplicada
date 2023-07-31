import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.css'],
})
export class Exercicio4Component implements OnInit {
  nome!: string;
  nascimento: Date | null = null;
  dataAtual!: Date;
  totalDeDias: number | null = null;

  constructor() {}

  ngOnInit(): void {
    this.dataAtual = new Date();
  }

  private realizarContagem(nascimento: Date, dataAtual: Date) {
    if (nascimento && dataAtual) {
      const diffTime = Math.abs(
        this.dataAtual.getTime() - this.nascimento!.getTime()
      );
      this.totalDeDias = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    } else {
      this.totalDeDias = null;
    }
  }

  calcularDiasDeVida() {
    this.realizarContagem(this.nascimento!, this.dataAtual);
  }

  limpar() {
    this.nome = '';
    this.nascimento = null;
    this.totalDeDias = null;
  }
}
