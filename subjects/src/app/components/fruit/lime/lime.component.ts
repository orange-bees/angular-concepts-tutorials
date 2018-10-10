import { Component, OnInit } from '@angular/core';
import { GroceryStoreService } from '../../../services/grocery-store.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-lime',
  templateUrl: './lime.component.html',
  styleUrls: ['./lime.component.css']
})
export class LimeComponent implements OnInit {
  limesBasket$: BehaviorSubject<number>;

  constructor(
    private groceryStoreService: GroceryStoreService
  ) {
    this.limesBasket$ = this.groceryStoreService.getLimeBasket();
  }

  ngOnInit() {}
}
