import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommentsRoutingModule} from "./comments-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommentComponent} from "./comment.component";



@NgModule({
    declarations: [
        CommentsRoutingModule.components
    ],
    exports: [
        CommentComponent
    ],
    imports: [
        CommonModule,
        CommentsRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class CommentModule { }
