import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MessagesRoutingModule} from './messages-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MessageComponent} from "./message.component";


@NgModule({
    declarations: [MessagesRoutingModule.components],
    exports: [
        MessageComponent
    ],
    imports: [
        CommonModule,
        MessagesRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class MessageModule { }
