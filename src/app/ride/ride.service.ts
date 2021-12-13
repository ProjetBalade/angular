import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rides, Ride } from './ride';
import {RideRepository} from './ride-repository';

@Injectable({
  providedIn: 'root'
})
export class RideService implements RideRepository {
  static readonly URL : string = environment.serverAddress + 'api/ride';

  // @ts-ignore
  constructor(private http: HttpClient) {
  }

  query(): Observable<Rides> {
    return this.http.get<Ride>(RideService.URL);
  }
  create(ride: Ride): Observable<Rides> {
    return this.http.post<Ride>(RideService.URL, ride);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(RideService.URL+ '/' + id);
  }
  update(id: number, ride: Ride): Observable<any> {
    return this.http.put(RideService.URL + '/' + id, ride);
  }
}
