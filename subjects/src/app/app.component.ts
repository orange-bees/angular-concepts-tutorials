import { Component, OnInit } from '@angular/core';
import { GroceryStoreService } from './services/grocery-store.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Concepts Tutorials - Subjects';
  numberOfApples = 0;
  numberOfLimes = 0;
  applesBasket$: BehaviorSubject<number>;
  limesBasket$: BehaviorSubject<number>;


  constructor(
    private groceryStoreService: GroceryStoreService
  ) {
    this.applesBasket$ = this.groceryStoreService.getAppleBasket();
    this.limesBasket$ = this.groceryStoreService.getLimeBasket();
  }

  ngOnInit() {}

  changeApples() {
    this.applesBasket$.next(this.numberOfApples);
  }

  changeLimes() {
    this.limesBasket$.next(this.numberOfLimes);
  }
}
