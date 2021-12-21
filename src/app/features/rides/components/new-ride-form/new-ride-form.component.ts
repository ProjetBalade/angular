import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ride} from "../../../../core/models/ride";

@Component({
  selector: 'app-new-ride-form',
  templateUrl: './new-ride-form.component.html',
  styleUrls: ['./new-ride-form.component.scss']
})
export class NewRideFormComponent implements OnInit {
  @Output() rideCreated: EventEmitter<Ride> = new EventEmitter<Ride>();

  form: FormGroup = this.fb.group({
    nameRide: ['', Validators.required],
    place:['', Validators.required],
    description:['', Validators.required],
    website: ['', Validators.required],
    difficulty:['', Validators.required],
    schedule:['', Validators.required],
    score:['', Validators.required],
    idUser: [0, Validators.required],
    longitude: [0, Validators.required],
    latitude: [0, Validators.required],

  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {
    this.rideCreated.emit(this.form.value);
  }
}
