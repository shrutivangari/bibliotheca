import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Book} from "../model/book";

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin' : '*'
  })
};

const goodReadsOptions = {
  headers: new HttpHeaders(
    {
    'Access-Control-Request-Headers': 'accept, content-type',
    'Access-Control-Request-Method': 'GET',
    'Access-Control-Allow-Origin': 'https://www.goodreads.com/, http://localhost:4200'
  })
};

@Injectable()
export class BookService {

  private booksUrl: string;
  private bookUrl : string;
  private goodReadsApi: string;
  private proxyGoodReads: string;

  constructor(private http: HttpClient) {
    this.booksUrl = 'http://localhost:8080/books';
    this.bookUrl = 'http://localhost:8080/book';
    this.goodReadsApi = 'https://www.goodreads.com/search/index.xml?key=gV98RSIy6o8SiVuT2218GA';
    this.proxyGoodReads = '/search/index.xml?key=gV98RSIy6o8SiVuT2218GA';
  }

  public findAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl, httpOptions);
  }

  public save(book: Book): Observable<Book> {
    console.log(JSON.stringify(book));
    return this.http.post<Book>(this.bookUrl, book, httpOptions);
  }

  public getId() : Observable<number> {
    return this.http.get<number>(this.booksUrl, httpOptions);
  }

  public searchForBook(searchQuery: string) {
    let url = this.proxyGoodReads + "&q=" + searchQuery;
    return this.http.get<string>(url, httpOptions);
  }

}
