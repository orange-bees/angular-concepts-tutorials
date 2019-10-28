import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventBusService, EVENT_BUS_KEY } from './services/event-bus.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Angular Concepts Tutorials - Event-Bus';
  lastApplePickedName = '';
  applesEvent$: Subscription = null;
  limesEvent$: Subscription = null;
  lastEvent = '';


  constructor(
    private eventBusService: EventBusService
  ) {}

  ngOnInit() {
    this.applesEvent$ = this.eventBusService.subscribeBus(EVENT_BUS_KEY.APPLES_KEY).subscribe(({ data }) => {
      this.lastApplePickedName = data.name;
    });
    this.limesEvent$ = this.eventBusService.subscribeBus(EVENT_BUS_KEY.LIMES_KEY).subscribe(() => {
      // TODO
    });
  }

  ngOnDestroy() {
    if (this.applesEvent$) {
      this.applesEvent$.unsubscribe();
    }
    if (this.limesEvent$) {
      this.limesEvent$.unsubscribe();
    }
  }
}
