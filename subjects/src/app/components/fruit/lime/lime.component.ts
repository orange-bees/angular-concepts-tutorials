import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../../../services/grocery-store.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-lime',
  templateUrl: './lime.component.html',
  styleUrls: ['./lime.component.css']
})
export class LimeComponent implements OnInit {
  limesBasket$: BehaviorSubject<number>;

  constructor(
    private eventBusService: EventBusService
  ) {
    this.limesBasket$ = this.eventBusService.getLimeBasket();
  }

  ngOnInit() {}
}
