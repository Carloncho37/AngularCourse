import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import {v4 as uuid } from 'uuid';

console.log(uuid());


@Injectable({providedIn: 'root'})
export class dbzService {
    //* Defino el atributo como un arreglo de Character, usando la interface
    public characters: Character[] = [{
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },{
      id: uuid(),
      name: 'Goku',
      power: 9500
    },{
      id: uuid(),
      name: 'Picoro',
      power: 7000
    }
    ]

  //* Defino metodo para agregar a lista
    addCharacter( character: Character ):void {
      //* Uso spred para que todas desestructurar todas las propiedades directamente
      const NewCharacter: Character = { id: uuid(), ... character};
      //* Uso metodo push para agregar a la listaW
      this.characters.push(NewCharacter);
  }

  //*Defino metodo para quitar personaje por indice
  // onDeleteCharacter (index:number) {
  //   this.characters.splice(index,1);
  // }

  //*Defino metodo para quitar personaje por id
  deleteCharacterById( id: string) {
    this.characters = this.characters.filter ( character => character.id !== id )
  }

}
