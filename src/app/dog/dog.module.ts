import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DogRoutingModule} from './dog-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DogComponent} from "./dog.component";


@NgModule({
    declarations: [DogRoutingModule.components],
    exports: [
        DogComponent
    ],
    imports: [
        CommonModule,
        DogRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class DogModule {
}
