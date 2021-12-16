import { Observable } from "rxjs";
import {Ride, Rides } from "./ride";

export interface RideRepository {
    GetAll(): Observable<Rides>;

    GetById(id : number) : Observable<Ride>;

    Create(ride: Ride) : Observable<Rides>;

    Delete(id : number) : Observable<any>;

    Update(id: number, ride: Ride) : Observable<any>;
}
