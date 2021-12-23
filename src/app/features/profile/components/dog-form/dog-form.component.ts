import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Dog} from "../../../../core/models/dog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CreateDogRequest} from "../../../../core/dto/CreateDogRequest";
import {DogApiService} from "../../../../core/services/dog-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.scss']
})
export class DogFormComponent implements OnInit {
  @Output() dogCreated: EventEmitter<Dog> = new EventEmitter<Dog>();

  form: FormGroup = this.fb.group({
    nameDog: ['', Validators.required],
    raceDog:['', Validators.required],
    dateOfBirth:['', Validators.required]


  });

  constructor(private fb: FormBuilder,private router : Router) { }

  ngOnInit(): void {
  }

  submit() {

    this.dogCreated.emit(this.form.value);

  }


}
