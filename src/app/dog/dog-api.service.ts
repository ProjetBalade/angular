import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {DogRepository} from "./dog-repository";
import {Dog, Dogs} from "./dog";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DogApiService implements DogRepository{
  static readonly URL: string = environment.serverAddress + 'api/dog';

  constructor(private http: HttpClient) { }

  GetAll(): Observable<Dogs> {
    return this.http.get<Dogs>(DogApiService.URL+'/getall');
  }

  GetById(id: number): Observable<Dog> {
    return this.http.get<Dog>(DogApiService.URL+ '/'+id);
  }

  Create(dog: Dog): Observable<Dog> {
    return this.http.post<Dog>(DogApiService.URL + '/create', dog);
  }

  Update(id: number, dog: Dog): Observable<any> {
    return this.http.put(DogApiService.URL + '/' + id, dog);
  }

  Delete(id: number): Observable<any> {
    return this.http.delete(DogApiService.URL + '/' + id);
  }


}
