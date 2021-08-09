import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstMainComponent } from './first-main/first-main.component';
import { FormsModule } from '@angular/forms';
import {AppareilService} from "./services/appareil.service";

@NgModule({
  declarations: [
    AppComponent,
    FirstMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
