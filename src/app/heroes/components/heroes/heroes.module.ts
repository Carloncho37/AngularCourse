import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';

//* Importaciones echas al realizar las Declarations
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';


//* Uso decoradores (importo)
@NgModule({
  //* declaro los 2 componentes
  declarations: [
    HeroComponent,
    ListComponent

  ],
  //* exporto los 2 componentes
  exports: [
    HeroComponent,
    ListComponent,

  ],
  //* Agrego el import del CommonModule para hacer uso del NgIf o NgFor ya
  //* que al encapsularlo, quedo fuera del scope y angular no lo incluye por default
  imports: [CommonModule]
})

//* Creo la clase y la exporto
export class HeroesModule {}
