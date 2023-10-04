import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/components/heroes/heroes.module';
//! Este import no se hace, ya que ahora es un modulo
//!import { CounterComponent } from './counter/counter.component';
//!import { HeroComponent } from './heroes/hero/hero.component';
//!import { ListComponent } from './heroes/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    //! Esta declaration ya no se hace, ahora es un modulo
    //! CounterComponent,
    //!HeroComponent,
    //!ListComponent
  ],
  imports: [
    BrowserModule,
    //* Se agrega aqui el modulo creado
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
