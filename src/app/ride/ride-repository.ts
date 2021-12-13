import { Observable } from "rxjs";
import {Ride, Rides } from "./ride";

export interface UserRepository {
    query(): Observable<Rides>;

    create(ride: Ride) : Observable<Rides>;

    delete(id : number) : Observable<any>;

    update(id: number, ride: Ride) : Observable<any>;
}
