import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../../../services/grocery-store.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {
  applesBasket$: BehaviorSubject<number>;

  constructor(
    private eventBusService: EventBusService
  ) {
    this.applesBasket$ = this.eventBusService.getAppleBasket();
  }

  ngOnInit() {}

}
