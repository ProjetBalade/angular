import {Observable} from "rxjs";
import {Comment, Comments} from "../models/comment";


export interface CommentRepository {
    getAll(): Observable<Comments>;

    getById(id : number) : Observable<Comment>;

    create(comment: Comment): Observable<Comment>;

    delete(id: number): Observable<any>;

    update(id: number, comment: Comment): Observable<any>;
}
