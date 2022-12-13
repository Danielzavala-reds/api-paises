import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Pais } from '../../interfaces/paises';


import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais: Pais[] = [];
  

  // Mandamos a llamar el serivicio de ActivatedRoute para suscribirnos a cualquier cambio del URL
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService:  PaisService,
    ) { }

  ngOnInit(): void {

    /* Este operador (switchMap) es de rxjs el cual es un observable que retorna otro observable, desestructuramos el id que viene del param y lo retorna por eso esta implicito el return */
    /* Tap es un operador que dispara un efecto secundario */
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.paisService.getPaisPorAlpha( id ) ),
      tap(console.log)
    )
      .subscribe(pais => this.pais = pais)

       

    // this.activatedRoute.params 
    //   .subscribe(({id}) => {
    //     console.log(id)

    //     this.paisService.getPaisPorAlpha(id)
    //     .subscribe (pais => {
    //       console.log(pais)
    //     });
    //   });
  };    
}
