import { Component } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter() :void {
    //* Emito por consola el personaje
    console.log(this.character);

    //* limpio el HTML de los values
    this.character.name = '';
    this.character.power = 0;

  }

}
