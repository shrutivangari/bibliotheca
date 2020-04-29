import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../service/book.service";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  book: Book;

  constructor(private router: Router, 
              private bookService: BookService) {
                this.book = new Book();
  }

  onSubmit() {
  }

  gotoBookList() {
    this.router.navigate(['/books']);
  }

  ngOnInit() {
  }

  createBook() {
    // let bookName = (<HTMLInputElement>document.getElementById('bookTitle')).value;
    // let bookSatus = (<HTMLInputElement>document.getElementById('bookStatus')).value;
    // let bookGenre = (<HTMLInputElement>document.getElementById('bookGenre')).value;
    //let newBook = new Book(0, bookName, bookSatus, bookGenre);
    
    console.log("Creating a new book " +  this.book.bookName + " " + this.book.status + " " + this.book.genre);
    this.bookService.save(this.book).subscribe(result => console.log(result.id + " " +result.bookName +" " + result.genre + " " + result.status));
  }

}
