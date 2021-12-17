import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RideRoutingModule} from './ride-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RideComponent} from "./ride.component";


@NgModule({
    declarations: [RideRoutingModule.components],
    exports: [
        RideComponent
    ],
    imports: [
        CommonModule,
        RideRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class RideModule {
}