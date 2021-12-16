import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommentsRoutingModule} from "./comments-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [CommentsRoutingModule.components],
  imports: [
    CommonModule,
      CommentsRoutingModule,
      ReactiveFormsModule,
      FormsModule
  ]
})
export class CommentModule { }
