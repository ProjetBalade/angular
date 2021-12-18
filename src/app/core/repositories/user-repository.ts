import { Observable } from "rxjs";
import {User, Users } from "../models/user";

export interface UserRepository {
    GetAll(): Observable<Users>;

    GetById(id : number): Observable<User>;

    Create(user: User) : Observable<User>;

    Delete(id : number) : Observable<any>;

    Update(id: number, user: User) : Observable<any>;
}
