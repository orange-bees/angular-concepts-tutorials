import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface EventBusData {
  key: string;
  data?: any;
}

export enum EVENT_BUS_KEY {
  'APPLES_KEY' = 'APPLES_KEY',
  'LIMES_KEY' = 'LIMES_KEY',
}

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private bus: Subject<EventBusData> = new Subject();

  constructor() {}

  subscribeBus(key?: EVENT_BUS_KEY): Observable<EventBusData> {
    return this.bus.pipe(
      filter(e => {
        if (key && e.key !== key) {
          return false;
        }
        return true;
      })
    );
  }

  sendEvent(event: EventBusData): void {
    this.bus.next(event);
  }
}
