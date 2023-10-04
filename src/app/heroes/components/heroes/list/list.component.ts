import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list', //* Defino el selector a usar
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //* Defino propiedad heroNames como arreglo de strings
  public heroNames2: string[] = ['AVENGERS', 'SPIDER-MAN', 'WOLVERINE', 'HULK', 'IRON MAN', 'CAPITÁN AMÉRICA', 'HAWKEYE', 'LUKE CAGE', 'LOS TRES GUERREROS', 'CAPITÁN MARVEL']

  public heroNames: string[] = ['Superman',
    'Supergirl (Kara Zor-El, Matrix, Linda Danvers)',
    'Superboy',
    'Jonathan Samuel Kent',
    'Jimmy Olsen',
    'Lois Lane',
    'Darkseid',
    'Lex Luthor',
    'Bizarro']

    //* Creo la propiedad de clase para guardar los herores borrados
    public deletedHeroe?: string ;

  //* creo el metodo que borra de la lista y lo agrega a la lista
    public removeLastHero(): void {
    this.deletedHeroe = this.heroNames.pop()
  }


  }
