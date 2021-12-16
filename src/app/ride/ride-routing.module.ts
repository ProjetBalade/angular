import { NgModule } from '@angular/core';
import {RideComponent} from "./ride.component";
import {RouterModule, Routes} from "@angular/router";
import {RideListComponent} from "./ride-list/ride-list.component";
import {RideFormComponent} from "./ride-form/ride-form.component";

const routes: Routes = [
    {
        path: 'api/ride', component: RideComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RideRoutingModule {
    static components = [
        RideComponent,
        RideListComponent,
        RideFormComponent
    ];
}