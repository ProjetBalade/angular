import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ElementToDelete} from "../../../../commons/element-to-delete";
import {Ride, Rides} from "../../../../core/models/ride";

@Component({
  selector: 'app-rides-list-view',
  templateUrl: './rides-list-view.component.html',
  styleUrls: ['./rides-list-view.component.css']
})
export class RidesListViewComponent implements OnInit {
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
