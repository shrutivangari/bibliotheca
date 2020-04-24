import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Book} from "../model/book";

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin' : '*'
  })
};

@Injectable()
export class BookService {

  private booksUrl: string;
  private goodReadsApi: string;

  constructor(private http: HttpClient) {
    this.booksUrl = 'http://localhost:8080/books';
    this.goodReadsApi = 'https://www.goodreads.com/search/index.xml?key=gV98RSIy6o8SiVuT2218GA';
  }

  public findAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl, httpOptions);
  }

  public save(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, httpOptions);
  }

  public getId() : Observable<number> {
    return this.http.get<number>(this.booksUrl, httpOptions);
  }

  public searchForBook(searchQuery: string) {
    let url = this.goodReadsApi + "&q=" + searchQuery;
    return this.http.get<string>(url);
  }

}
