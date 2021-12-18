import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsListComponent } from './pages/dogs-list/dogs-list.component';
import { ProfileDetailsComponent } from './pages/profile-details/profile-details.component';
import {DogFormComponent} from "./components/dog-form/dog-form.component";
import {DogsListViewComponent} from "./components/dogs-list-view/dogs-list-view.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



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
        ReactiveFormsModule
    ]
})
export class ProfileModule { }
