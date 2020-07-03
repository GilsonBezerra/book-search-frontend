import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '../models/book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css'],
  
})
export class BookAddComponent implements OnInit {

  public books: Array<any>;

  public book: any;

  constructor(
    private bookService: BookService,
  ) { }

  ngOnInit() {
    this.book = {};
  }

  // Salva um novo Livro
  public saveNewBook(form: FormGroup) {
   this.bookService.save(this.book)
      .subscribe(resp => {
        this.books.push(resp);
      });
    form.reset();
    location.reload();
    
  }



}
