import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventBusService, EVENT_BUS_KEY } from '../../../services/event-bus.service';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit, OnDestroy {
  constructor(
    private eventBusService: EventBusService
  ) {}

  ngOnInit() {}

  ngOnDestroy() {}

  pickApple(name: string): void {
    this.eventBusService.sendEvent({
      key: EVENT_BUS_KEY.APPLES_KEY,
      data: {
        name,
      }
    });
  }
}
