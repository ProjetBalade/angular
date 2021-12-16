import { Observable } from "rxjs";
import {User, Users } from "./user";

export interface UserRepository {
    GetAll(): Observable<Users>;

    GetById(id : number): Observable<User>;

    Create(user: User) : Observable<Users>;

    Delete(id : number) : Observable<any>;

    Update(id: number, user: User) : Observable<any>;
}
