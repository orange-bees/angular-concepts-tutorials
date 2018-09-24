import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lime',
  templateUrl: './lime.component.html',
  styleUrls: ['./lime.component.css']
})
export class LimeComponent implements OnInit {
  @Output() increment: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  clickMe() {
    this.increment.emit(1);
  }

}
