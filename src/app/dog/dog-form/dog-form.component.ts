import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Dog} from "../dog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css']
})
export class DogFormComponent implements OnInit {
  @Output() dogCreated: EventEmitter<Dog> = new EventEmitter<Dog>();

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    race:['', Validators.required],
    dateOfBirth:['', Validators.required,Validators.pattern(/\d{2}\/\d{2}\/\d{4}$/)],

  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {
    this.dogCreated.emit(this.form.value);
  }
}
