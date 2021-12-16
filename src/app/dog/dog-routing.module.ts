import { NgModule } from '@angular/core';
import {DogComponent} from "./dog.component";
import {RouterModule, Routes} from "@angular/router";
import {DogListComponent} from "./dog-list/dog-list.component";
import {DogFormComponent} from "./dog-form/dog-form.component";

const routes: Routes = [
  {
    path: 'api/dog', component: DogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogRoutingModule {
  static components = [
    DogComponent,
    DogListComponent,
    DogFormComponent
  ];
}
