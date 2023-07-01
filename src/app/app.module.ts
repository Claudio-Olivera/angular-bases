import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';
=======

import { CounterModule } from './counter/components/counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';



>>>>>>> 9ba083ad2b816e89c02b5fed685c7cb909bd87e8

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    HttpClientModule,
    GifsModule,
    SharedModule
=======
    CounterModule,
    HeroesModule,
    DbzModule
>>>>>>> 9ba083ad2b816e89c02b5fed685c7cb909bd87e8
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
