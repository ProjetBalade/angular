import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsListComponent } from './pages/dogs-list/dogs-list.component';
import { ProfileDetailsComponent } from './pages/profile-details/profile-details.component';
import {DogFormComponent} from "./components/dog-form/dog-form.component";
import {DogsListViewComponent} from "./components/dogs-list-view/dogs-list-view.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatRippleModule} from "@angular/material/core";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
    declarations: [
        DogsListComponent,
        ProfileDetailsComponent,
        DogFormComponent,
        DogsListViewComponent
    ],
    exports: [
        DogsListComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ProfileModule { }
