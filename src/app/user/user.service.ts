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

  query(): Observable<Users> {
        return this.http.get<User>(UserService.URL);
    }
    create(user: User): Observable<Users> {
        return this.http.post<User>(UserService.URL, user);
    }
    delete(id: number): Observable<any> {
        return this.http.delete(UserService.URL+ '/' + id);
    }
    update(id: number, user: User): Observable<any> {
       return this.http.put(UserService.URL + '/' + id, user);
    }
}
