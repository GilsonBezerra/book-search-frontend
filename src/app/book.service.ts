import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  booksUrl = 'http://localhost:8080/books';


  constructor( private http: HttpClient) { }

  bookList() {
    return this.http.get<any[]>( `${this.booksUrl}` );

  }

}
