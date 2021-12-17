import { NgModule } from '@angular/core';
import {UserComponent} from "./user.component";
import {RouterModule, Routes} from "@angular/router";
import {UserListComponent} from "./user-list/user-list.component";
import {UserFormComponent} from "./user-form/user-form.component";

const routes: Routes = [
    {
        path: 'api/user', component: UserComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
    static components = [
        UserComponent,
        UserListComponent,
        UserFormComponent
    ];
}