import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
  // declaraciones son arreglos y mencionan que cosas contiene el modulo.
    declarations: [
      HeroeComponent,
      ListadoComponent
    ],
    // exports son las cosas que quiero hacer visibles fuera del modulo
    exports:[
      ListadoComponent
    ],
    //dentro van modulos, usualmente
    imports:[
      CommonModule
    ]
})
export class HeroesModule{}
