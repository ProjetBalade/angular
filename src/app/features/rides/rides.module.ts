import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RidesListComponent} from "./pages/rides-list/rides-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RidesMapComponent } from './pages/rides-map/rides-map.component';
import {CommentFormComponent} from "./components/comment-form/comment-form.component";
import {CommentListComponent} from "./components/comment-list/comment-list.component";
import {NewRideFormComponent} from "./components/new-ride-form/new-ride-form.component";
import {RidesListViewComponent} from "./components/rides-list-view/rides-list-view.component";
import {AgmCoreModule} from "@agm/core";
import {MatIconModule} from "@angular/material/icon";
import {MatRippleModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    CommentFormComponent,
    CommentListComponent,
    NewRideFormComponent,
    RidesListViewComponent,
    RidesListComponent,
    RidesMapComponent
  ],
  exports: [
    CommentFormComponent,
    CommentListComponent,
    NewRideFormComponent,
    RidesListViewComponent,
    RidesListComponent,
    RidesMapComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWR-Xd9CFnPNfHZehTyBOCvP-BcKRE6Fk',
      libraries: ['places']
    }),
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatRippleModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class RidesModule { }
