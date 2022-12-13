import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PorCapitalComponent } from "src/app/paises/pages/por-capital/por-capital.component";
import { PorPaisComponent } from "src/app/paises/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "src/app/paises/pages/por-region/por-region.component";
import { VerPaisComponent } from "src/app/paises/pages/ver-pais/ver-pais.component";





const routes: Routes = [  /*Rutas principales */
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent,
        
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]     




@NgModule({
    imports: [
        RouterModule.forRoot(routes)    /* Importamos las rutas principales forRoot y como argumento le mandamos las routes del array de objetos */
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}