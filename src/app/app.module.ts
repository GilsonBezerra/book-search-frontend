import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookService } from './book.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookSearchComponent,
    BookAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    CalendarModule,
    InputMaskModule,
    ButtonModule,
    TableModule,
    HttpClientModule
  ],
  providers: [BookService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
