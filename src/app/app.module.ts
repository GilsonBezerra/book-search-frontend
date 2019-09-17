import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import {ButtonModule} from 'primeng/components/button/button';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookSearchComponent } from './book-search/book-search.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    CalendarModule,
    InputMaskModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
