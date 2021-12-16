import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RideRoutingModule} from './ride-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [RideRoutingModule.components],
    imports: [
        CommonModule,
        RideRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class RideModule {
}