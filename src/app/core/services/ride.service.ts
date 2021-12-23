import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, tap} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rides, Ride } from '../models/ride';
import {RideRepository} from '../repositories/ride-repository';
import {HttpClient} from "@angular/common/http";
import {CreateRideRequest} from "../dto/CreateRideRequest";

@Injectable({
  providedIn: 'root'
})
export class RideService implements RideRepository {
  static readonly URL : string = environment.serverAddress + 'api/rides';
  private rides : ReplaySubject<Ride[]>;
  private lastRetrievedRides: Ride[];
  private selectedRide: BehaviorSubject<Ride|undefined>;

  constructor(private http: HttpClient) {
    this.rides= new ReplaySubject<Ride[]>();
    this.lastRetrievedRides = [];
    this.selectedRide = new BehaviorSubject<Ride|undefined>(undefined);
  }

  Reload(): Observable<Rides> {
    return this.http.get<Rides>(RideService.URL)
      .pipe(tap(d => {
        this.lastRetrievedRides = d;
        this.rides.next(this.lastRetrievedRides);
      }));
  }

  GetRides():ReplaySubject<Rides> {
    return this.rides;
  }
  GetById(id: number): Observable<Ride> {
    return this.http.get<Ride>(RideService.URL+ '/'+id);
  }

  Create(ride: CreateRideRequest): Observable<Ride> {
    return this.http.post<Ride>(RideService.URL, ride)
      .pipe(tap(newRide => {
        this.lastRetrievedRides.push(newRide);
        this.rides.next(this.lastRetrievedRides);
      }));
  }
  Delete(id: number): Observable<any> {
    return this.http.delete(RideService.URL+ '/' + id);
  }
  Update(id: number, ride: Ride): Observable<any> {
    return this.http.put(RideService.URL + '/' + id, ride);
  }

  GetSelectedRide(): Observable<Ride|undefined> {
    return this.selectedRide.pipe();
  }

  SelectRide(ride: Ride|undefined): void {
    this.selectedRide.next(ride);
  }
}
