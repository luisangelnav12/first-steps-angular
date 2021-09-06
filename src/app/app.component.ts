import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: String = 'proyecto01';
  numero: number = 10;
  // restar() {
  //   this.numero -= 1;
  // }
  // sumar() {
  //   this.numero += 1;
  // }
  base: number = 2;
  acumular(valor: number) {
    this.numero += valor;
  }
}
