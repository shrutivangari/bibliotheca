import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {BookService} from "./service/book.service";
import {BookFormComponent} from "./book-form/book-form.component";
import { SearchForBookComponent } from './search-for-book/search-for-book.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookFormComponent,
    SearchForBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
