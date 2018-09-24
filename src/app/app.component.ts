import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Concepts Tutorials - Input & Output';
  appleDescription = '';
  limeCounter = 0;

  incrementLimeCounter(amount) {
    this.limeCounter += amount;
  }
}
