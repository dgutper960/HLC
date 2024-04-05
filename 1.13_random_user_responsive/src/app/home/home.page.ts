import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Define una interfaz para la respuesta de la API
interface ApiResponse {
 results: any[]; // Define el tipo de los resultados aquí
}

@Component({
 selector: 'app-home',
 templateUrl: 'home.page.html',
 styleUrls: ['home.page.scss'],
})
export class HomePage {

 // Almacenamos array obtenido en la API random.me (20 perfiles)
 // indicamos que el tipo de dato es un objeto
 users$: Observable<any[]>;

 constructor(private httpClient: HttpClient) {
    // Utilizamos el operador map para extraer la propiedad 'results' de la respuesta
    this.users$ = this.httpClient.get<ApiResponse>('https://randomuser.me/api/?results=20').pipe(
      map(data => data.results)
    );
 }
}
