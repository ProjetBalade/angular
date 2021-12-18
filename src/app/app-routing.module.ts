import { NgModule } from '@angular/core';
import {AppComponent} from "./app.component";
import {RouterModule, Routes} from "@angular/router";
import {RidesMapComponent} from "./features/rides/pages/rides-map/rides-map.component";
import {MessagesListComponent} from "./features/messages/pages/messages-list/messages-list.component";
import {
  NotificationsListComponent
} from "./features/notifications/pages/notifications-list/notifications-list.component";
import {ProfileDetailsComponent} from "./features/profile/pages/profile-details/profile-details.component";
import {LoginComponent} from "./features/login/pages/login/login.component";
import {RegisterComponent} from "./features/register/pages/register/register.component";
import {MessageDetailsComponent} from "./features/messages/pages/message-details/message-details.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'rides', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'rides', component: RidesMapComponent
  },
  {
    path: 'messages', component: MessageDetailsComponent
  },
  {
    path: 'notifications', component: NotificationsListComponent
  },
  {
    path: 'profile', component: ProfileDetailsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [AppComponent];
}
