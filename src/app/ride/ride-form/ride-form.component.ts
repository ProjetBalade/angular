import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ride} from "../ride";

@Component({
  selector: 'app-ride-form',
  templateUrl: './ride-form.component.html',
  styleUrls: ['./ride-form.component.css']
})
export class RideFormComponent implements OnInit {
  @Output() rideCreated: EventEmitter<Ride> = new EventEmitter<Ride>();

  form: FormGroup = this.fb.group({
    nameRide: ['', Validators.required],
    place:['', Validators.required],
    description:['', Validators.required],
    website: ['', Validators.required],
    difficulty:['', Validators.required],
    schedule:['', Validators.required],
    photo:['', Validators.required],
    score:['', Validators.required],
    idUser: ['', Validators.required],

  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {
    this.rideCreated.emit(this.form.value);
  }
}
