import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class MainPageComponent {
  //* Defino el atributo como un arreglo de Character, usando la interface
  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },{
    name: 'Goku',
    power: 9500
  },{
    name: 'Picoro',
    power: 7000
  }
  ]
}
