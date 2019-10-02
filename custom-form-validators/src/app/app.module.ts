import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { CustomValidatorsService } from './services/custom-validators.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    CustomValidatorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
