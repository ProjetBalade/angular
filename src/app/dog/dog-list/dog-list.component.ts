import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ElementToDelete} from "../../commons/element-to-delete";
import {Dog, Dogs} from "../dog";

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  @Input() dogs: Dogs = [];
  @Output() dogDeleted: EventEmitter<ElementToDelete<Dog>> =
      new EventEmitter<ElementToDelete<Dog>>();
  @Output() dogChanged: EventEmitter<Dog> =
      new EventEmitter<Dog>();
  constructor() { }

  ngOnInit(): void {
  }

  delete(dog: Dog, index: number) {
    this.dogDeleted.emit({
      element: dog,
      index: index
    });
  }

  update(dog: Dog) {
    this.dogChanged.emit(dog);
  }
}
