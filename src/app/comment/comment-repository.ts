import {Observable} from "rxjs";
import {Comment, Comments} from "./comment";


export interface CommentRepository {
    getAll(): Observable<Comments>;

    create(comment: Comment): Observable<Comment>;

    delete(id: number): Observable<any>;

    update(id: number, comment: Comment): Observable<any>;
}
