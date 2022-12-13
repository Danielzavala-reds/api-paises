import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/paises';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  /* Le mandamos el termino como argumento porque tenemos el $event del input (hijo) */
  buscar(termino: string){
    this.hayError = false; //Pusimos el error en false inmediatamente de que se hace la petición para que se quite del HTML si es que hay resultados correctos
    this.termino = termino;
    // console.log(this.termino);
    
    this.paisService.buscarCapital( termino)  /* Para que un observable se dispare obligatoriamente necesitamos por lo menos un subscribe */
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


}
