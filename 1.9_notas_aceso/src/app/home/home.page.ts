import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Definimos las varibles para las notas
  lengua: number = 0; // si no están inicializadas nos da error
  comentario: number = 0;
  ingles: number = 0;
  especifica1: number = 0;
  especifica2: number = 0;

  // Definimos las variables para las medias y nota final
  medGeneral: number = 0;
  medEspecifica: number = 0;
  notaFinal: number = 0;

  constructor() {}

  // definimos el método que calcula la nota final
  calcNotaFinal(general: number, especifica: number){
    return (general+especifica)/2;
  }

}
