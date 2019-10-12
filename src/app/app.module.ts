import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Hello1Component } from './hello1.component';
 import { Hello2Component } from './hello2.component';


import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule , AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, Hello1Component, Hello2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
