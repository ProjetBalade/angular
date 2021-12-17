import { Observable } from "rxjs";
import {Ride, Rides } from "./ride";

export interface RideRepository {

    GetAll(): Observable<Rides>;

    Create(ride: Ride) : Observable<Ride>;

    Update(id: number, ride: Ride) : Observable<any>;

    Delete(id : number) : Observable<any>;

    GetById(id : number) : Observable<Ride>;
}
