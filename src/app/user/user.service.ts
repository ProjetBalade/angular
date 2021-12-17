import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users, User } from './user';
import {UserRepository} from './user-repository';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserRepository {
  static readonly URL : string = environment.serverAddress + 'api/users';

  constructor(private http: HttpClient) {
  }

    GetAll(): Observable<Users> {
        return this.http.get<Users>(UserService.URL+'/getAll');
    }

    GetById(id: number): Observable<User> {
      return this.http.get<User>(UserService.URL+'/'+id);
    }

    Create(user: User): Observable<User> {
        return this.http.post<User>(UserService.URL + '/create', user);
    }
    Delete(id: number): Observable<any> {
        return this.http.delete(UserService.URL+ '/' + id);
    }
    Update(id: number, user: User): Observable<any> {
       return this.http.put(UserService.URL + '/' + id, user);
    }
}
