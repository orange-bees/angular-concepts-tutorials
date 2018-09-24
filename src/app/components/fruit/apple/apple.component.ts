import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit() {}

}
