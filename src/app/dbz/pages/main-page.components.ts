import { Component } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class MainPageComponent {

  //* Defino la propiedad como Private
  constructor ( private dbzService: dbzService) {
   }

   //*Creo getters y setters

   get characters(): Character[] {
  return [...this.dbzService.characters];
 }

 onDeleteCharacter (id: string ):void {
  this.dbzService.deleteCharacterById(id);
 }

 onNewCharacter ( character: Character ) {
  this.dbzService.addCharacter( character);
 }



}
