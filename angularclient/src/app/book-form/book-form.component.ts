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

  // book: Book;

  constructor(private router: Router, 
              private bookService: BookService) {
  //  this.book = new Book();
  }

  onSubmit() {
    //this.bookService.save(this.book).subscribe(result => this.gotoBookList());
    console.log("Inside submit");
  }

  gotoBookList() {
    this.router.navigate(['/books']);
  }

  ngOnInit() {
  }

  createBook() {
    let bookName = (<HTMLInputElement>document.getElementById('bookTitle')).value;
    let bookSatus = (<HTMLInputElement>document.getElementById('bookStatus')).value;
    let bookGenre = (<HTMLInputElement>document.getElementById('bookGenre')).value;
    let newBook = new Book(0, bookName, bookSatus, bookGenre);
    this.bookService.save(newBook).subscribe(result => console.log(result.id + " " +result.bookName +" " + result.genre + " " + result.status));
  }

  // addBookToDB(bookTitle, bookStatus, bookGenre) {
  //   console.log("Inside methods");
  //   let newBook = new Book(100, bookTitle, bookStatus, bookGenre);
  //   this.bookService.save(newBook).subscribe(result => this.gotoBookList);
  // }

}
