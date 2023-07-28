// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-exercicio4',
//   templateUrl: './exercicio4.component.html',
//   styleUrls: ['./exercicio4.component.css']
// })
// export class Exercicio4Component {
//   nome!: string;
//   nascimento!: Date;
//   resultadoA: number | null = null;
//   resultadoI: number | null = null;

//   private camposSaoValidos(): boolean {
//     return this.nome !== undefined && this.nascimento !== undefined;
//   }

//   private realizarMultiplicacaoA(): number | null {
//     return this.camposSaoValidos()
//       ? this.pao * 0.35 && this.pao_de_queijo * 0.8 && this.broa * 1.5
//       : null;
//   }

//   calcularDiasDeVida() {
//     if (this.camposForamAlterados()) {
//       this.resultadoA = this.realizarMultiplicacaoA();
//     }
//   }

//   private realizarMultiplicacaoI(): number | null {
//     return (this.resultadoI = this.resultadoA! * 0.1);
//   }

//   calcularAnosBisextos() {
//     if (this.camposForamAlterados()) {
//       this.resultadoI = this.realizarMultiplicacaoI();
//     }
//   }

//   private camposForamAlterados(): boolean {
//     return this.pao !== undefined && this.broa !== undefined;
//   }

//   limpar() {
//     this.nome = "";
//     this.nascimento = '';
//     this.resultadoA = null;
//   }

//   limparI() {
//     this.resultadoA = null;
//     this.resultadoI = null;
//   }
// }
