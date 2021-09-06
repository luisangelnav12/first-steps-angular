import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {
  heroes: string[] = ['Spiderman', 'Ironman', 'Linterna verde', 'peter parker'];
  heroe: string = '';
  constructor() {}

  ngOnInit(): void {}
  borrarHeroe() {
    console.log('borrando');
    const heroetilin = this.heroes.shift() || '';
    console.log(heroetilin);
    this.heroe = heroetilin;
  }
}
