//* Primero defino clases, luego hago uso del decorator Component
//* defino en selector el nombre con el cual voy a usarlo
//* defino con Template, el html explicito o con templateUrl la direccion del html


//* Uso el snippet que brinda la extension de VsCode
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <div> El counter vale;  {{ counter }} </div>

  <!-- Creo los botones, indico evento y llamo a metodos-->
  <button (click)="increaseBy(+1)" >+1 </button>
  <button (click)="resetCounter()" > Reset </button>
  <button (click)="increaseBy(-1)" > -1 </button>
  `
})

export class CounterComponent {
  constructor() { }
  public counter: number = 10; //* Defino atributo

  //* Defino metodo
  increaseBy( numb: number): void {
    this.counter +=numb;
  }

  //* Defino metodo
  resetCounter():void{
    this.counter = 10;
  }
}

//* Creo el Component sin usar el snippet
// import { Component } from "@angular/core"

// @Component({
//   selector: 'app-counter',
//   template: '<h1> Hola counter </h1>'
// })
// export class CounterComponent {

// }
