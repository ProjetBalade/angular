import {Component, OnDestroy, OnInit} from '@angular/core';
import {User, Users} from "./user";
import {Subscription} from "rxjs";
import {UserService} from "./user.service";
import {ElementToDelete} from "../commons/element-to-delete";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  users:Users = [];
  subscriptions: Subscription[]=[];

  constructor(private userRepository : UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub && sub.unsubscribe());
  }

  private loadUsers() {
    this.subscriptions.push(
        this.userRepository.GetAll()
            .subscribe(users => this.users = users)
    );
  }

  createUser(user: User) {
    this.subscriptions.push(
        this.userRepository.Create(user)
            .subscribe(user => this.users.push(user))
    );
  }

  deleteUser(elementToDelete: ElementToDelete<User>) {
    const DELETE_USER_FROM_LIST = () => this.users.splice(elementToDelete.index, 1);
    this.subscriptions.push(
        this.userRepository
            .Delete(elementToDelete.element.id)
            .subscribe(DELETE_USER_FROM_LIST)
    );
  }

  updateUser(user: User) {
    this.subscriptions.push(
        this.userRepository.Update(user.id, user)
            .subscribe()
    );
  }

}
