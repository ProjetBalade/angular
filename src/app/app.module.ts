import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import {RidesModule} from "./features/rides/rides.module";
import {MessagesModule} from "./features/messages/messages.module";
import {NotificationsModule} from "./features/notifications/notifications.module";
import {ProfileModule} from "./features/profile/profile.module";
import {LoginModule} from "./features/login/login.module";
import {RegisterModule} from "./features/register/register.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppRoutingModule.components
  ],
  imports: [
    BrowserModule,

    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RidesModule,
    MessagesModule,
    NotificationsModule,
    ProfileModule,
    LoginModule,
    RegisterModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
