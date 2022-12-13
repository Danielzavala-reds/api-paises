import { Component } from '@angular/core';
import { Pais } from '../../interfaces/paises';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
    button{
      margin-right: 10px;
    }

  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' :  'btn btn-outline-primary' ;
  }

  activarRegion(region: string){

    /* Esta condición hace que al dar otra vez click en el boton, no se haga un refresh de la misma lista*/
    if(region === this.regionActiva) {return;}

    this.regionActiva = region;

    /* Aqui purgamos la lista de los paises, para que al dar click en otro botón sea más rápido el cambio */
    this.paises = [];

    

    this.paisService.buscarPorRegion(region)
      .subscribe({
        next: (paises) => {
          // console.log(paises)
          this.paises = paises
          
        }
      })
  }

}
