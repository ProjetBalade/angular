import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User, Users} from "../user";
import {ElementToDelete} from "../../commons/element-to-delete";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: Users = [];
  @Output() userDeleted: EventEmitter<ElementToDelete<User>> =
      new EventEmitter<ElementToDelete<User>>();
  @Output() userChanged: EventEmitter<User> =
      new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
  }

  delete(user: User, index: number) {
    this.userDeleted.emit({
      element: user,
      index: index
    });
  }

  update(user: User) {
    this.userChanged.emit(user);
  }

}
