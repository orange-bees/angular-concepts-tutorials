import { Component, OnInit } from '@angular/core';
import { GroceryStoreService } from '../../../services/grocery-store.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {
  applesBasket$: BehaviorSubject<number>;

  constructor(
    private groceryStoreService: GroceryStoreService
  ) {
    this.applesBasket$ = this.groceryStoreService.getAppleBasket();
  }

  ngOnInit() {}

}
