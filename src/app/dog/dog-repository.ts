import {Observable} from "rxjs";
import {Dog, Dogs} from "./dog";

export interface DogRepository {

    GetAll(): Observable<Dogs>;

    GetById(id : number) : Observable<Dog>;

    Create(dog: Dog): Observable<Dog>;

    Update(id: number, dog: Dog): Observable<any>;

    Delete(id: number): Observable<any>;
}
