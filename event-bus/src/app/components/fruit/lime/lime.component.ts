import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventBusService, EVENT_BUS_KEY } from '../../../services/event-bus.service';

@Component({
  selector: 'app-lime',
  templateUrl: './lime.component.html',
  styleUrls: ['./lime.component.css']
})
export class LimeComponent implements OnInit, OnDestroy {
  constructor(
    private eventBusService: EventBusService
  ) {}

  ngOnInit() {}

  ngOnDestroy() {}

  pickLime(): void {
    this.eventBusService.sendEvent({
      key: EVENT_BUS_KEY.LIMES_KEY,
    });
  }
}
