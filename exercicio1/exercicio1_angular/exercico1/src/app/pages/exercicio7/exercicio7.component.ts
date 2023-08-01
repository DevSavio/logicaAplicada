// import { Component, OnInit } from '@angular/core';
// // import { parse } from 'date-fns';

// @Component({
//   selector: 'app-exercicio7',
//   templateUrl: './exercicio7.component.html',
//   styleUrls: ['./exercicio7.component.css'],
// })
// export class Exercicio7Component {
//   dia!: number;
//   mes!: number;
//   ano!: number;
//   dias: Date | null = null;
//   totalDias: number | null = null;

//   eBisexto(ano: number): boolean {
//     return ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0);
//   }

//   diaNoMes(mes: number, ano: number): number {
//     const diaDoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     if (mes === 2 && this.eBisexto(ano)) {
//       return 29;
//     }
//     return diaDoMes[mes - 1];
//   }

//   private calcularDiasPassados(dia: number, mes: number, ano: number) {
//     const atualData = new Date();
//     const atualAno = atualData.getFullYear();
//     const atualMes = atualData.getMonth() + 1;
//     const atualDia = atualData.getDate();

//     if (ano && mes && dia && dia >= 1 && dia <= this.diaNoMes(mes, ano)) {
//       let diasTotal = 0;

//       for (let m = 1; m < mes; m++) {
//         diasTotal += this.diaNoMes(m, ano);
//       }

//       diasTotal += dia;

//       if (ano === atualAno && mes === atualMes && dia === atualDia) {
//         this.totalDias = 0;
//       } else {
//         this.totalDias = diasTotal;
//       }
//     } else {
//       this.totalDias = null;
//     }
//   }

//   calcularDias() {
//     if (this.dias !== null) {
//       const dia = this.dias.getDate();
//       const mes = this.dias.getMonth() + 1;
//       const ano = this.dias.getFullYear();
//       this.calcularDiasPassados(dia, mes, ano);
//     } else {
//       this.totalDias = null;
//     }
//   }

//   limpar() {
//     alert('apagado');
//     //   this.dias = null;
//     this.totalDias = null;
//   }
// }

import { Component } from '@angular/core';
import { isLeapYear, getDaysInMonth } from 'date-fns';

@Component({
  selector: 'app-exercicio7',
  templateUrl: './exercicio7.component.html',
  styleUrls: ['./exercicio7.component.css'],
})
export class Exercicio7Component {
  dia: number | null = null;
  mes: number | null = null;
  totalDias: number | null = null;

  calcularDias() {
    if (this.dia !== null && this.mes !== null) {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const isCurrentYearLeap = isLeapYear(currentYear);
      const daysInCurrentYear = isCurrentYearLeap ? 366 : 365;

      let daysTotal = this.dia;

      for (let m = 1; m < this.mes; m++) {
        daysTotal += getDaysInMonth(new Date(currentYear, m - 1));
      }

      this.totalDias = daysTotal;
    } else {
      this.totalDias = null;
    }
  }

  limpar() {
    this.totalDias = null;
    this.dia = null;
    this.mes = null;
  }
}
