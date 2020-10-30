import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { AppleComponent } from './components/fruit/apple/apple.component';
import { LimeComponent } from './components/fruit/lime/lime.component';
import { GroceryStoreService } from './services/grocery-store.service';

@NgModule({
  declarations: [
    AppComponent,
    AppleComponent,
    LimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    GroceryStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
