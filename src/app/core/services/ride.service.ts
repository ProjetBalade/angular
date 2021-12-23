import { Injectable } from '@angular/core';
import {Observable, ReplaySubject, tap} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rides, Ride } from '../models/ride';
import {RideRepository} from '../repositories/ride-repository';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RideService implements RideRepository {
  static readonly URL : string = environment.serverAddress + 'api/rides';
  private rides : ReplaySubject<Ride[]>;

  constructor(private http: HttpClient) {
    this.rides= new ReplaySubject<Ride[]>();
  }

  Reload(): Observable<Rides> {
    return this.http.get<Rides>(RideService.URL)
      .pipe(tap(d => this.rides.next(d)));
  }

  GetRides():ReplaySubject<Rides> {
    return this.rides;
  }
  GetById(id: number): Observable<Ride> {
    return this.http.get<Ride>(RideService.URL+ '/'+id);
  }

  Create(ride: Ride): Observable<Ride> {
    return this.http.post<Ride>(RideService.URL, ride);
  }
  Delete(id: number): Observable<any> {
    return this.http.delete(RideService.URL+ '/' + id);
  }
  Update(id: number, ride: Ride): Observable<any> {
    return this.http.put(RideService.URL + '/' + id, ride);
  }
}
