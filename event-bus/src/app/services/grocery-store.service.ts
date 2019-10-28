import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryStoreService {
  private appleBasket: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private limeBasket: BehaviorSubject<number> = new BehaviorSubject<number>(10);

  constructor() {}

  getAppleBasket(): BehaviorSubject<number> {
    return this.appleBasket;
  }

  getLimeBasket(): BehaviorSubject<number> {
    return this.limeBasket;
  }
}
