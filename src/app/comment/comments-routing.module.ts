import { NgModule } from '@angular/core';
import {CommentComponent} from "./comment.component";
import {RouterModule, Routes} from '@angular/router';
import {CommentListComponent} from "./comment-list/comment-list.component";
import {CommentFormComponent} from "./comment-form/comment-form.component";

const routes: Routes = [
  {
    path: 'api/comment', component: CommentComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
  static components = [
      CommentComponent,
      CommentListComponent,
      CommentFormComponent
  ];
}
