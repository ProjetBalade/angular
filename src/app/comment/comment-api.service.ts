import { Injectable } from '@angular/core';
import {CommentRepository} from "./comment-repository";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Comment, Comments} from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentApiService implements CommentRepository{

 static readonly URL: string = environment.serverAdresse + 'api/comments';

  constructor(private http: HttpClient) {

  }

  create(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(CommentApiService.URL, comment);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(CommentApiService.URL + '/' + id);
  }

  getAll(): Observable<Comments> {
    return this.http.get<Comments>(CommentApiService.URL);
  }

  update(id: number, comment: Comment): Observable<any> {
    return this.http.put(CommentApiService.URL + '/' + id, comment);
  }
}
