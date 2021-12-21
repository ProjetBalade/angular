import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users, User } from '../models/user';
import {UserRepository} from '../repositories/user-repository';
import {HttpClient} from "@angular/common/http";
import {ApiAuthenticationResult} from "../dto/ApiAuthenticationResult";
import {ApiAuthenticationRequest} from "../dto/ApiAuthenticationRequest";

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserRepository {
  static readonly URL : string = environment.serverAddress + 'api/users';

  private _token : string|undefined;

  constructor(private http: HttpClient) {
    this._token = undefined;
  }

  get token(): string | undefined {
    return this._token;
  }

  set token(value: string | undefined) {
    this._token = value;
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

  Authenticate(name: string, password: string): Observable<ApiAuthenticationResult> {
    const apiAuthenticationRequest : ApiAuthenticationRequest = { name, password };
    return this.http.post<ApiAuthenticationResult>(UserService.URL + '/Authenticate', apiAuthenticationRequest );
  }


}