import {Observable} from "rxjs";
import {Message, Messages} from "./message";

export interface MessageRepository {
    query() : Observable<Messages>;

    create(message: Message): Observable<Message>;

    delete(id: number): Observable<any>;

    update(id: number, message: Message): Observable<any>;
}
