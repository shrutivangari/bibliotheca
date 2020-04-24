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
    this.subscription = this.route.params.subscribe(params => {
      const bookTitle = params['bookTitle'];
      const bookGenre = params['bookGenre'];
      const bookStatus = params['bookStatus'];

      console.log(bookTitle + " " + bookGenre + " " + bookStatus);

      const bookId = this.bookService.getId;
      console.log(bookId);
      if(bookId) {
        let newBook = new Book(100, bookTitle, bookStatus, bookGenre);
        this.bookService.save(newBook)
                        .subscribe(result => console.log(result.id + " " +result.bookName +" " + result.genre + " " + result.status));
        }
      
    });
  }

}
