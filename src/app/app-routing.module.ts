import { NgModule } from '@angular/core';
import {AppComponent} from "./app.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {
        path: '', redirectTo: 'api/user', pathMatch: 'full'
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