import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserComponent} from "./user.component";


@NgModule({
    declarations: [UserRoutingModule.components],
    exports: [
        UserComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class UserModule {
}
