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
  lastEvent = '';


  constructor(
    private groceryStoreService: GroceryStoreService
  ) {
    this.applesBasket$ = this.groceryStoreService.getAppleBasket();
    this.limesBasket$ = this.groceryStoreService.getLimeBasket();

    this.applesBasket$.subscribe(value => {
      this.lastEvent = `Apples basket now has ${value} apple(s)`;
    });
    this.limesBasket$.subscribe(value => {
      this.lastEvent = `Limes basket now has ${value} lime(s)`;
    });
  }

  ngOnInit() {}

  changeApples() {
    this.applesBasket$.next(this.numberOfApples);
  }

  changeLimes() {
    this.limesBasket$.next(this.numberOfLimes);
  }
}
