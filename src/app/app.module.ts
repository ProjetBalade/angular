import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {DogModule} from './dog/dog.module';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppRoutingModule.components

  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        DogModule,
        AppRoutingModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
