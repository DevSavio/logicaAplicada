import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  templateUrl: './exercicio2.component.html',
  styleUrls: ['./exercicio2.component.css'],
})
export class Exercicio2Component {
  cavalos!: number;
  resultado: number | null = null;

  private camposSaoValidos(): boolean {
    return this.cavalos !== undefined;
  }

  private realizarMultiplicacao(): number | null {
    return this.camposSaoValidos() ? this.cavalos * 4 : null;
  }

  calcularFerraduras() {
    if (this.camposForamAlterados()) {
      this.resultado = this.realizarMultiplicacao();
    }
  }

  private camposForamAlterados(): boolean {
    return this.cavalos !== undefined;
  }
  }
}
