import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rides-map',
  templateUrl: './rides-map.component.html',
  styleUrls: ['./rides-map.component.scss']
})
export class RidesMapComponent implements OnInit {

  lat = 22.2736308;
  long = 70.7512555;

  constructor() { }

  ngOnInit(): void {
  }

}
