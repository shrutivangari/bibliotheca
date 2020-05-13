import {RouterModule, Routes} from "@angular/router";
import {BookListComponent} from "./book-list/book-list.component";
import {NgModule} from "@angular/core";
import {BookFormComponent} from "./book-form/book-form.component";
import { SearchForBookComponent } from "./search-for-book/search-for-book.component";

const routes: Routes = [
  {
    path: 'books', component: BookListComponent
  },
  {
    path: 'book-form', component: BookFormComponent
  },
  {
    path: 'search-for-book', component: SearchForBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
