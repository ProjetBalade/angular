import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DogRoutingModule} from './dog-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [DogRoutingModule.components],
    imports: [
        CommonModule,
        DogRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class DogModule {
}
