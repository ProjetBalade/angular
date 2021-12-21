import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Message, Messages} from "../models/message";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageApiService {

  static readonly URL : string = environment.serverAddress + 'api/message';

  constructor(private http: HttpClient) {
  }

  create(message: Message): Observable<Message> {
    return this.http.post<Message>(MessageApiService.URL, message);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(MessageApiService.URL + '/' + id);
  }

  query() : Observable<Messages> {
    return this.http.get<Messages>(MessageApiService.URL);
  }

  update(id: number, message: Message): Observable<any> {
    return this.http.put(MessageApiService.URL + '/' + id, message);
  }
}
