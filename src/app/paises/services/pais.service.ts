import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Pais } from '../interfaces/paises';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  

  private apiUrl: string = 'https://restcountries.com/v3.1/';

  get getParams (){
    return new HttpParams()
    .set( 'fields', 'name,capital,cca2,flags,population' );
 
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Pais[]>{

    const url = `${this.apiUrl}/name/${termino}`

    return this.http.get<Pais[]>(url, {params: this.getParams})  /* Otra forma de manejar el error es desde el servicio de la manera que esta debajo, el of muta el error, y podemos decir que retorna dentro del arreglo */
      // .pipe(
      //   catchError(error => of (['Hola Mundo']))
      // );
  };

  buscarCapital(termino: string): Observable<Pais[]> {
   
    const url = `${this.apiUrl}/capital/${termino}`
    
    return this.http.get<Pais[]>(url, {params: this.getParams})
  };

  getPaisPorAlpha(id: string): Observable<Pais> {
   
    const url = `${this.apiUrl}/alpha/${ id }`
    
    return this.http.get<Pais>(url)
  };

  buscarPorRegion(region: string): Observable<Pais[]> {

    
    const url = `${this.apiUrl}/region/${region}`
    
    return this.http.get<Pais[]>(url, {params: this.getParams})
      .pipe(
        tap(console.log)
      )
  };
  

}
