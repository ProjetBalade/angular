import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RideComponent } from './ride/ride.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { RideListComponent } from './ride/ride-list/ride-list.component';
import { RideFormComponent } from './ride/ride-form/ride-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RideComponent,
    UserListComponent,
    UserFormComponent,
    RideListComponent,
    RideFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }