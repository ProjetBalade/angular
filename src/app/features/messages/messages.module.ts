import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageDetailsComponent } from './pages/message-details/message-details.component';
import {MessagesListComponent} from "./pages/messages-list/messages-list.component";
import {MessagesListViewComponent} from "./components/messages-list-view/messages-list-view.component";
import {MessageFormComponent} from "./components/message-form/message-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        MessagesListComponent,
        MessageDetailsComponent,
        MessagesListViewComponent,
        MessageFormComponent
    ],
    exports: [
        MessagesListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class MessagesModule { }
