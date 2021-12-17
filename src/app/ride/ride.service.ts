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

  GetAll(): Observable<Rides> {
    return this.http.get<Ride>(RideService.URL);
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
