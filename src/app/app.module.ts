import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { CommentFormComponent } from './comment/comment-form/comment-form.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { MessageComponent } from './message/message.component';
import { MessageFormComponent } from './message/message-form/message-form.component';
import { MessageListComponent } from './message/message-list/message-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    CommentFormComponent,
    CommentListComponent,
    MessageComponent,
    MessageFormComponent,
    MessageListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
