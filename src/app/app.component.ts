import { Component } from '@angular/core';
import {MatTabChangeEvent} from "@angular/material/tabs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';


  constructor(private router : Router) {
  }

  onTabChanged(event: MatTabChangeEvent): void{
    switch(event.index){
      case 0:
        this.router.navigate(['/rides']);
        break;
      case 1:
        this.router.navigate(['/messages']);
        break;
      case 2:
        this.router.navigate(['/notifications']);
        break;
      case 3:
        this.router.navigate(['/profile']);
        break;
    }
  }
}
