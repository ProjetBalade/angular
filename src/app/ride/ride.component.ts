import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ride, Rides} from "./ride";
import {Subscription} from "rxjs";
import {RideService} from "./ride.service";
import {ElementToDelete} from "../commons/element-to-delete";

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.css']
})
export class RideComponent implements OnInit, OnDestroy {
  rides: Rides = [];
  subscriptions: Subscription[] = [];

  constructor(private rideRepository : RideService) { }

  ngOnInit(): void {
    this.loadRides();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(ride => ride && ride.unsubscribe());
  }

  private loadRides() {
    this.subscriptions.push(
        this.rideRepository.GetAll()
            .subscribe(rides => this.rides = rides);
    )

  }

  createRide(ride: Ride) {
    this.subscriptions.push(
        this.rideRepository.Create(ride)
            .subscribe(ride => this.rides.push(ride))
    );
  }

  deleteRide(elementToDelete: ElementToDelete<Ride>) {
    const DELETE_RIDE_FROM_LIST = () => this.rides.splice(elementToDelete.index, 1);
    this.subscriptions.push(
        this.rideRepository
            .Delete(elementToDelete.element.id)
            .subscribe(DELETE_RIDE_FROM_LIST)
    );
  }

  updateRide(ride: Ride) {
    this.subscriptions.push(
        this.rideRepository.Update(ride.id, ride)
            .subscribe()
    );
  }
}
