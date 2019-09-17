import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  books: Array<any>;


  // tslint:disable-next-line: no-shadowed-variable
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookList();

  }

  bookList() {
    this.bookService.bookList()
      .subscribe(data => this.books = data);
  }

}
