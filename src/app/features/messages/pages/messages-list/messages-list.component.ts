import { Component, OnInit } from '@angular/core';
import {Message, Messages} from "../../../../core/models/message";
import {Subscription} from "rxjs";
import {MessageApiService} from "../../../../core/services/message-api.service";
import {ElementToDelete} from "../../../../commons/element-to-delete";

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {

  messages: Messages = [];
  subscriptions: Subscription[] = [];

  constructor(private messageRepository: MessageApiService) { }

  ngOnInit(): void {
    this.loadsMessages();
  }

  private loadsMessages() {
    this.subscriptions.push(
        this.messageRepository.query()
            .subscribe(messages => this.messages = messages)
    );
  }

  postMessage(message: Message) {
    this.subscriptions.push(
        this.messageRepository.create(message)
            .subscribe(message => this.messages.push(message))
    );
  }

  deleteMessage(elementTodelete: ElementToDelete<Message>) {
    const DELETE_MESSAGE = () => this.messages.splice(elementTodelete.index, 1);
    this.subscriptions.push(
        this.messageRepository
            .delete(elementTodelete.element.id)
            .subscribe(DELETE_MESSAGE)
    );
  }

  updateMessage(message: Message) {
    this.subscriptions.push(
        this.messageRepository.update(message.id, message)
            .subscribe()
    );
  }
}
