import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Concepts Tutorials - Custom Form Validators';
  appleDescription = '';
  limeCounter = 0;

  constructor() {}

  ngOnInit() {}

  incrementLimeCounter(amount) {
    this.limeCounter += amount;
  }
}
