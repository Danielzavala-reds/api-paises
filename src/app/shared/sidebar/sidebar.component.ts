import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  /* Agregamos estilos directamente a los li solo de este componente para que el usuario sepa que puede hacer click ahí */
  styles: [ 
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
