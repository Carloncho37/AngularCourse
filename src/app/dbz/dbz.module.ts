import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.components';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';

//* Creo modulo
@NgModule({
  //* Declaro los componentes a usar
  declarations: [ MainPageComponent, ListComponent, AddCharacterComponent],
  //* importo modulos
  imports: [
    CommonModule, FormsModule
  ],
  //* exportlo los componenetes que usarè
  exports: [ MainPageComponent ]
})

export class DbzModule { }
