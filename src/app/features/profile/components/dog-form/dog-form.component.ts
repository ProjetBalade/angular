import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Dog} from "../../../../core/models/dog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css']
})
export class DogFormComponent implements OnInit {
  @Output() dogCreated: EventEmitter<Dog> = new EventEmitter<Dog>();

  form: FormGroup = this.fb.group({
    nameDog: ['', Validators.required],
    raceDog:['', Validators.required],
    dateOfBirth:['', Validators.required,Validators.pattern(/\d{2}\-\d{2}\-\d{4}$/)],
    idUser:[0, Validators.required]


  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {
    this.dogCreated.emit(this.form.value);
  }
}
