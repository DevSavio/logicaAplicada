import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio8',
  templateUrl: './exercicio8.component.html',
  styleUrls: ['./exercicio8.component.css'],
})
export class Exercicio8Component {
  media1: number | null = null;
  media2: number | null = null;
  media3: number | null = null;

  calcularMediaPonderada() {
    alert('Calcular MEDIAS PONDERADAS');
  }
}
