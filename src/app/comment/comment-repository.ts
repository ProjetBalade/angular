import {Observable} from "rxjs";
import {Comment, Comments} from "./comment";


export interface CommentRepository {
    getAll(): Observable<Comments>;

    getById(content : string) : Observable<number>;

    create(comment: Comment): Observable<Comment>;

    delete(id: number | undefined): Observable<any>;

    update(id: number | undefined, comment: Comment): Observable<any>;
}
