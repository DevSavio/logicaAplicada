import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio8',
  templateUrl: './exercicio8.component.html',
  styleUrls: ['./exercicio8.component.css'],
})
export class Exercicio8Component {
  media1!: number;
  media2!: number;
  media3!: number;
  mediaPonderada: number | null = null;

  private camposSaoValidos(): boolean {
    return (
      this.media1 !== undefined &&
      this.media2 !== undefined &&
      this.media3 !== undefined
    );
  }

  private realizarMedia(media1: number, media2: number, media3: number) {
    return this.camposSaoValidos()
      ? (this.mediaPonderada = (media1 * 1 + media2 * 2 + media3 * 3) / 6)
      : null;
  }

  calcularMediaPonderada() {
    this.mediaPonderada = this.realizarMedia(
      this.media1,
      this.media2,
      this.media3
    );
  }

  limpar() {
    this.mediaPonderada = null;
    this.media1 = 0;
    this.media2 = 0;
    this.media3 = 0;
  }
}
