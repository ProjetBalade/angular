import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {DogModule} from './dog/dog.module';
import {CommentModule} from './comment/comment.module';
import {MessageModule} from './message/message.module';
import {UserModule} from './user/user.module';
import {RideModule} from './ride/ride.module';
import { AgmCoreModule } from '@agm/core';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [AppRoutingModule.components

  ],
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDqaoUPPSGJ2wEej0Zqadcq6LnzYlXgKfI',
            libraries: ['places']
        }),
        ReactiveFormsModule,
        HttpClientModule,
        DogModule,
        CommentModule,
        MessageModule,
        UserModule,
        RideModule,
        AppRoutingModule


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
