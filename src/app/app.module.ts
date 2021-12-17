import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {RideModule} from "./ride/ride.module";
import {UserModule} from "./user/user.module";

@NgModule({
  declarations: [AppRoutingModule.components

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,
    RideModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }