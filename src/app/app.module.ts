import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material'


import { AppComponent } from './app.component';
import { GametableComponent } from './gametable/gametable.component';


@NgModule({
  declarations: [
    AppComponent,
    GametableComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
