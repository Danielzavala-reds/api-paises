import { Component, EventEmitter, Input ,Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Pais } from '../../interfaces/paises';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {


  @Input() placeholder: string = '';
  /* Tenemos que emitir el evento del input al padre */
  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  /*  */
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  /* Este subject es un observable "especial", la idea del debouncer es que se emita cuando se deja de escribir */
  debouncer: Subject<string> = new Subject;

  termino: string = ''
  
  
  constructor() { }
  
  
  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor => {
      this.onDebounce.emit(valor);
      // console.log('debouncer', valor);
    } )
  }


  buscar(){
    this.onEnter.emit(this.termino)
    this.termino = ''
    
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }
  
}
