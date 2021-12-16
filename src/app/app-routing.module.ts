import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {CommentComponent} from "./comment/comment.component";
import {MessageComponent} from "./message/message.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'comment', pathMatch: 'full'
  },
  {
    path: 'comment', component: CommentComponent
  },
  {
    path: 'message', component: MessageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [AppComponent];
}
