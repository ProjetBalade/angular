import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MessageComponent} from './message.component';
import {MessageListComponent} from "./message-list/message-list.component";
import {MessageFormComponent} from "./message-form/message-form.component";

const routes : Routes = [
  {
    path: 'api/message', component: MessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class MessagesRoutingModule {
  static components = [
      MessageComponent,
      MessageListComponent,
      MessageFormComponent
  ];
}
