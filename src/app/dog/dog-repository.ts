import {Observable} from "rxjs";
import {Dog, Dogs} from "./dog";

export interface DogRepository {

    query(): Observable<Dogs>;

    create(dog: Dog): Observable<Dog>;

    delete(id: number): Observable<any>;

    update(id: number, dog: Dog): Observable<any>;
}
