import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-home',
 templateUrl: 'home.page.html',
 styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

 num: number = 0;
 numSecret: number = 0; // Inicializamos numSecret con 0 para evitar mostrar un número aleatorio antes de que la página se cargue completamente
 pista: string = "¿La suerte te acompaña?";

 constructor() {}

 ngOnInit() { // Vemos que hemos importado e implementado 
    // Generamos el número secreto cuando la página se carga
    this.numSecret = Math.round(Math.random() * 100 + 1);
    // Muestra el número secreto en la consola
    console.log('Número secreto:', this.numSecret); 
 }

 comprobarNumero() {
    if (this.num != 0) {
      if (this.numSecret < this.num) {
        this.pista = "EL NÚMERO ES MENOR";
      } else if (this.numSecret > this.num) {
        this.pista = "EL NÚMERO ES MAYOR";
      } else {
        this.pista = "¡Bravooo!! oh yeeeaaahhhh";
      }
    }
 }

 reinicio(): void {
    location.reload();
 }
}

