import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';
import { CommonModule } from '@angular/common';

//* creo componente con el decorator
@Component({
  //* defino selector para usar en el HTMl del index
  selector: 'dbz-list',
  //* defino ruta donde esta este HTML
  templateUrl: './list.component.html',
  //* defino ruta donde esta el css
  styleUrls: ['./list.component.css']
})

//* Defino clase y la importo

export class ListComponent {
  //* Defino atributo , uso decorador Input para poder comunicarme con otro modulo
  @Input()
  public characterList: Character[] = [{
    name: 'Tu vieja',
    power: 15
  },
]

@Output()
  //*public onDelete: EventEmitter<number> = new EventEmitter();
  public onDelete: EventEmitter<string> = new EventEmitter();


onDeleteCharacter(id?: string) :void {
    //* Controlo que ID no venga nulo
    if ( !id) return;

    this.onDelete.emit( id);

}

}
