import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  templateUrl: './exercicio6.component.html',
  styleUrls: ['./exercicio6.component.css'],
})
export class Exercicio6Component {
  prato: number | null = 600;
  kilo: number | null = 47.0;
  peso: number | null = null;
  totalComanda: number | null = null;

  constructor() {
    this.peso = this.gerarNumeroAleatorio(600, 3000);
  }

  private gerarNumeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  calcularKilo() {
    this.totalComanda = (this.kilo! * this.peso!) / 1000;
  }

  limpar() {
    this.peso = null;
    this.totalComanda = null;
  }
}
