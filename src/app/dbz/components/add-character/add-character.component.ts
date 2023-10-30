import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})

export class AddCharacterComponent {


    @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter() :void {
    //* Emito por consola el personaje.
    console.log(this.character);
    //! Valido que posea nombre
    if (this.character.name.length === 0 ) return;

    //* paso la referencia por variable
    const newCharacter = structuredClone(this.character);

    this.onNewCharacter.emit(newCharacter);
    //* this.onNewCharacter.emit(this.character);

    //* limpio el HTML de los values
    this.character.name = '';
    this.character.power = 0;

  }

}
