import { Component } from '@angular/core';
// Importaciones a ficheros de nuestro proyecto
import { Tarea } from '../tarea';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Podemos declarar propiedades del tipo Tarea 
  tareaEditando: Tarea;

  constructor(private firestoreService: FirestoreService) {
    // Crea una tarea vacía al empezar
    this.tareaEditando = {} as Tarea;
  }

  clickBotonInsertar() {
    // Accedemos al método insretar de la interface implementada en firestore.service.ts
    // Recordamos sus parámetros de entrada
    // Como segundo parámetro, pondremos el valor de tareaEditando con una promesa
    this.firestoreService.insertar("tareas", this.tareaEditando)
      .then(() => {
        console.log("Tarea creada correctamente");
        // Limpiamos el contenido de la tarea que se estaba editando
        this.tareaEditando = {} as Tarea;
      }, (error) => {
        // en caso de error
        console.error(error)
      })
  }
}
