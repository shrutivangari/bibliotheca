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

  constructor(private http: HttpClient) {
    this.booksUrl = 'http://localhost:8080/books';
  }

  public findAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl, httpOptions);
  }

  public save(book: Book) {
    return this.http.post<Book>(this.booksUrl, book, httpOptions);
  }

}
