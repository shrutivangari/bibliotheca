import {RouterModule, Routes} from "@angular/router";
import {BookListComponent} from "./book-list/book-list.component";
import {NgModule} from "@angular/core";
import {BookFormComponent} from "./book-form/book-form.component";
import { AddBookComponent } from "./add-book/add-book.component";

const routes: Routes = [
  {
    path: 'books', component: BookListComponent
  },
  {
    path: 'book-form', component: BookFormComponent
  },
  {
    path: 'add-book', component: AddBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
