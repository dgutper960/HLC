import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

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
  mensaje: string = "";

  constructor() {}

  ngOnInit(){
    this.lengua = 0;
    this.comentario = 0;
    this.ingles = 0;
    this.especifica1 = 0;
    this.especifica2 = 0;
    this.notaFinal = 0;
    this.mensaje = "";
  }

  // definimos el método que calcula la nota final
  calcNotaFinal(general: number, especifica: number){
    return (general+especifica)/2;
  }

  calcularMedias(){

    // Calculamos las medias específicas y general
    this.medGeneral = (this.lengua + this.comentario + this.ingles) / 3;
    this.medEspecifica = (this.especifica1 + this.especifica2) / 2;

    // si ambas estan dentro del rango indicado llamamos calculamos la nota final
    if(this.medEspecifica >= 4 && this.medGeneral >= 4){
      this.notaFinal = this.calcNotaFinal(this.medGeneral, this.medEspecifica);
    }else if(this.medEspecifica < 4 || this.medGeneral < 4){
      this.mensaje = "La nota media en uno de los bloques es insuficiente";
    }
    console.log(this.notaFinal);
    console.log(this.medEspecifica);
    console.log(this.medGeneral);
  }
}
