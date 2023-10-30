import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero', //* Defino el selector a usar
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name : string = 'ironman';
  public age : number = 27;

  //* Creo metodo ( se usa como propiedad)
  get capitalizedName (): string {
    return this.name.toUpperCase();
  }

  //* Creo metodo ( Se usa como metodo)
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero() : void {
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 17;
  }

  reset(){
    this.name = 'default';
    this.age =0;
  }


}
