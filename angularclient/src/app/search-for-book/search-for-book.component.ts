import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-for-book',
  templateUrl: './search-for-book.component.html',
  styleUrls: ['./search-for-book.component.css']
})
export class SearchForBookComponent implements OnInit {

  searchQuery: string;

  constructor(private bookService: BookService,
    private router: Router) {

   }

  ngOnInit() {
    this.router.navigate(['/search-for-book'], {
      queryParams: {searchQuery: this.searchQuery}
    })
    this.bookService.searchForBook(this.searchQuery).subscribe(
      result => console.log(result)
    );
  }

}
