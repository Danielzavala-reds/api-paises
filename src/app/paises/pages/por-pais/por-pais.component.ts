import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/paises';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  
  `
  ]
})
export class PorPaisComponent{

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  
  paisesSugeridos: Pais[] = [];
  mostrarSugerencias: boolean = false


  
  

  constructor(private paisService: PaisService) { }  // Iyectamos el servicio de país

 
  /* Le mandamos el termino como argumento porque tenemos el $event del input (hijo) */
  buscar(termino: string){
    this.hayError = false; //Pusimos el error en false inmediatamente de que se hace la petición para que se quite del HTML si es que hay resultados correctos
    this.termino = termino;
    // console.log(this.termino);
    
    this.paisService.buscarPais( termino)  /* Para que un observable se dispare obligatoriamente necesitamos por lo menos un subscribe */
      .subscribe({
        next: (paises) => {
          console.log(paises),
          this.paises = paises  /* Para mostrar los elemenetos en el HTML, recuerda siempre tener definido el arreglo vacio donde se va a llenar y mandarle ese mismo argumento a this.paises = paises */
        },
        error: (error) => {
          this.hayError = true
          this.paises = []
        }
      });

  };

  sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    // TODO: crear sugerencias
    this.paisService.buscarPais(termino) 
      .subscribe( {
        next: paises => this.paisesSugeridos = paises.splice(0,5),
        error: error => this.paisesSugeridos = []
      });

  };

  mostrarSugerido(termino: string){
    this.buscar(termino);
    
  }
 
};
