import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './models/book.model';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  booksUrl = 'http://localhost:8080/books';


  constructor( private http: HttpClient) { }

  // GET
  public bookList() {
    return this.http.get<any[]>( `${this.booksUrl}` );

  }

  // POST
  public save(book: any) {
    return this.http.post(this.booksUrl, book);

  }


}
