import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { Book } from '../model/book';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book;
  subscription: Subscription;

  constructor(private bookService: BookService,
    private route: ActivatedRoute) { }

  ngOnInit() {
      console.log("Creating a new book " +  this.book.bookName + " " + this.book.status + " " + this.book.genre);
      this.bookService.save(this.book)
                      .subscribe(result => console.log(result.id + " " +result.bookName +" " + result.genre + " " + result.status));
                      //, result => this.gotoBookList());
  }


}
