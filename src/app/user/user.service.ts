import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users, User } from './user';
import {UserRepository} from './user-repository';

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserRepository {
  static readonly URL : string = environment.serverAddress + 'api/user';

  // @ts-ignore
  constructor(private http: HttpClient) {
  }

    GetAll(): Observable<Users> {
        return this.http.get<User>(UserService.URL);
    }

    GetById(id: number): Observable<User> {
      return this.http.get<User>(UserService.URL+'/'+id);
    }

    Create(user: User): Observable<Users> {
        return this.http.post<User>(UserService.URL, user);
    }
    Delete(id: number): Observable<any> {
        return this.http.delete(UserService.URL+ '/' + id);
    }
    Update(id: number, user: User): Observable<any> {
       return this.http.put(UserService.URL + '/' + id, user);
    }
}
