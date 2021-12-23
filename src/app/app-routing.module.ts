import { NgModule } from '@angular/core';
import {AppComponent} from "./app.component";
import {RouterModule, Routes} from "@angular/router";
import {RidesMapComponent} from "./features/rides/pages/rides-map/rides-map.component";
import {
  NotificationsListComponent
} from "./features/notifications/pages/notifications-list/notifications-list.component";
import {ProfileDetailsComponent} from "./features/profile/pages/profile-details/profile-details.component";
import {LoginComponent} from "./features/login/pages/login/login.component";
import {RegisterComponent} from "./features/register/pages/register/register.component";
import {MessageDetailsComponent} from "./features/messages/pages/message-details/message-details.component";
import {AuthenticatedGuard} from "./core/guards/authenticated.guard";
import {NewRideFormComponent} from "./features/rides/components/new-ride-form/new-ride-form.component"
const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    canActivate: [AuthenticatedGuard],
    path: 'rides', component: RidesMapComponent
  },
  {
    canActivate: [AuthenticatedGuard],
    path: 'messages', component: MessageDetailsComponent
  },
  {
    canActivate: [AuthenticatedGuard],
    path: 'notifications', component: NotificationsListComponent
  },
  {
    canActivate: [AuthenticatedGuard],
    path: 'profile', component: ProfileDetailsComponent
  },
  {
    canActivate: [AuthenticatedGuard],
    path: 'addRide', component: NewRideFormComponent
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
