import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Ride, Rides} from "../../../../core/models/ride";
import {Observable, ReplaySubject, tap} from "rxjs";
import {RideService} from "../../../../core/services/ride.service";
import {AgmMap} from "@agm/core";

@Component({
  selector: 'app-rides-map',
  templateUrl: './rides-map.component.html',
  styleUrls: ['./rides-map.component.scss']
})
export class RidesMapComponent implements OnInit {

  @ViewChild('myMap')
  private myMap: AgmMap | undefined;

  rides$: Observable<Ride[]>;

  currentSelectedRide: Ride | undefined;

  constructor(private rideService : RideService) {
    this.rides$ = rideService.GetRides()
      .pipe(tap(v => console.log("Got some rides " + v.length)));

    this.currentSelectedRide = undefined;
  }

  centerLatitude() {
    return this.currentSelectedRide ? this.currentSelectedRide.latitude : 50.85;
  }

  centerLongitude() {
    return this.currentSelectedRide ? this.currentSelectedRide.longitude : 4.35;
  }

  selectRide(ride: Ride) {
    this.currentSelectedRide = ride;
  }

  ngOnInit(): void {
  }

  closeRideDetails() {
    this.currentSelectedRide = undefined;
  }
}
