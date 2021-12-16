import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Output() userCreated: EventEmitter<User> = new EventEmitter<User>();

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email:['', Validators.required],
    password:['', Validators.required],

  });
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {
    this.userCreated.emit(this.form.value);
  }

}
