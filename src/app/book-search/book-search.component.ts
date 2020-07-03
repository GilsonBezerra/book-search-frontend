import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { FormControl } from '@angular/forms';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
  preserveWhitespaces: true
})
export class BookSearchComponent implements OnInit {

  

  /**
   * Variável que guarda os dados retornados do banco
   */
  public books: Array<any>;


  // tslint:disable-next-line: no-shadowed-variable
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookList();

  }

  // GET
  public bookList() {
    this.bookService.bookList()
      .subscribe(data => this.books = data);
  }

  // DELETE
  public excluir(id: number) {
    this.bookService.delete(id)
      .then( () => {
        alert('O livro foi excluído com sucesso!');
        this.bookList();
      });
      

  }

 

}
