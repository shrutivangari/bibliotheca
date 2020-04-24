import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {BookService} from "./service/book.service";
import {BookFormComponent} from "./book-form/book-form.component";
import { AddBookComponent } from './add-book/add-book.component';
import { SearchForBookComponent } from './search-for-book/search-for-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookFormComponent,
    AddBookComponent,
    SearchForBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
