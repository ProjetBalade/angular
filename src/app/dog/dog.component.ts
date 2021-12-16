import {Component, OnDestroy, OnInit} from '@angular/core';
import {DogApiService} from "./dog-api.service";
import {Dog, Dogs} from "./dog";
import {Subscription} from "rxjs";
import {ElementToDelete} from "../commons/element-to-delete";

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit, OnDestroy {
  dogs: Dogs = [];
  subscriptions: Subscription[] = [];
  constructor(private dogRepository : DogApiService) { }

  ngOnInit(): void {
    this.loadDogs();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub && sub.unsubscribe());
  }

  private loadDogs() {
    this.subscriptions.push(
        this.dogRepository.GetAll()
            .subscribe(dogs => this.dogs = dogs)
    );
  }

  //Get by id ???

  createDog(dog: Dog) {
    this.subscriptions.push(
        this.dogRepository.Create(dog)
            .subscribe(dog => this.dogs.push(dog))
    );
  }

  deleteDog(elementToDelete: ElementToDelete<Dog>) {
    const DELETE_DOG_FROM_LIST = () => this.dogs.splice(elementToDelete.index, 1);
    this.subscriptions.push(
        this.dogRepository
            .Delete(elementToDelete.element.id)
            .subscribe(DELETE_DOG_FROM_LIST)
    );
  }

  updateDog(dog: Dog) {
    this.subscriptions.push(
        this.dogRepository.Update(dog.id, dog)
            .subscribe()
    );
  }

}
