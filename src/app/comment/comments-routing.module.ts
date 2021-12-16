import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommentComponent} from "./comment.component";
import {RouterModule, Routes} from "@angular/router";
import {CommentListComponent} from "./comment-list/comment-list.component";
import {CommentFormComponent} from "./comment-form/comment-form.component";

const routes: Routes = [
  {
    path: 'comments', component: CommentComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
  static components = [
      CommentComponent,
      CommentListComponent,
      CommentFormComponent
  ];
}
