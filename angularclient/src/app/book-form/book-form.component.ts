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
  apiStatus : Boolean = false;

  constructor(private router: Router, 
              private bookService: BookService) {
                this.book = new Book();
  }

  onSubmit() {
    this.createBook();
  }

  gotoBookList() {
    console.log("Inside gotobooklist");
    this.router.navigate(['/books']);
  }

  ngOnInit() {
  }

  createBook() {    
    console.log("Creating a new book " +  this.book.bookName + " " + this.book.status + " " + this.book.genre);
    this.bookService.save(this.book)
                    .subscribe(
                        result => {
                          console.log(result.id + " " +result.bookName +" " + result.genre + " " + result.status),
                          this.apiStatus = true,
                          this.gotoBookList()
                        },
                        (err) => {
                          console.log(err)
                          this.apiStatus = false;
                        }
                      );
  }

}
