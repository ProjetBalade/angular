import {Component, Input, OnInit} from '@angular/core';
import {Ride, Rides} from "../../../../core/models/ride";
import {RideService} from "../../../../core/services/ride.service";

@Component({
  selector: 'app-detail-ride',
  templateUrl: './detail-ride.component.html',
  styleUrls: ['./detail-ride.component.scss']
})
export class DetailRideComponent implements OnInit {

  @Input()
  currentSelectedRide: Ride | undefined;
  constructor(private rideService : RideService) {
    this.currentSelectedRide = undefined;
  }

  ngOnInit(): void {
  }

}
