import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num: number = 0; // Esta variable la vamos a inicializar con el input del html mediante [(ngModel)]="num"
  numSecret: number = Math.round(Math.random()*100+1);
  pista: string = "¿La suerte te acompaña?"; // esta variable la vamos a mostrar en el html

  constructor() {}
// Función que compara el número introducido por el usuario con numSecret
  comprobarNumero(){
    console.log(this.numSecret);
    // comprobamos el el número tiene valor diferente a 0
    if(this.num != 0){
      // Comparamos el valor de los números
      if(this.numSecret < this.num){
        this.pista = "MENOR"
      }else if(this.numSecret > this.num){
        this.pista = "MAYOR"
      }else{
        this.pista = "¡Bravooo!! oh yeeeaaahhhh"
      }
    }


  }

}
