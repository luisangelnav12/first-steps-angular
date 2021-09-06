import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
})
export class HeroeComponent implements OnInit {
  nombre: string = 'Ironman';
  edad: number = 45;
  constructor() {}

  ngOnInit(): void {}

  obtenerNombre(): String {
    return `${this.nombre} - ${this.edad}`;
  }
  cambiarNombre(): void {
    this.nombre = 'Lui';
  }
  cambiarEdad(): void {
    this.edad = 30;
  }
}
