import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ElementToDelete} from "../../commons/element-to-delete";
import {Ride, Rides} from "../ride";

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.css']
})
export class RideListComponent implements OnInit {
  @Input() rides: Rides = [];
  @Output() rideDeleted: EventEmitter<ElementToDelete<Ride>> =
      new EventEmitter<ElementToDelete<Ride>>();
  @Output() rideChanged: EventEmitter<Ride> =
      new EventEmitter<Ride>();
  constructor() { }

  ngOnInit(): void {
  }

  delete(ride: Ride, index: number) {
    this.rideDeleted.emit({
      element: ride,
      index: index
    });
  }

  update(ride: Ride) {
    this.rideChanged.emit(ride);
  }
}