import {Observable, ReplaySubject} from "rxjs";
import {Ride, Rides } from "../models/ride";

export interface RideRepository {

    Reload(): Observable<Rides>;

    GetRides():ReplaySubject<Rides>;

    Create(ride: Ride) : Observable<Ride>;

    Update(id: number, ride: Ride) : Observable<any>;

    Delete(id : number) : Observable<any>;

    GetById(id : number) : Observable<Ride>;
}
