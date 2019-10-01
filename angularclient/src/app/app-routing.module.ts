import {RouterModule, Routes} from "@angular/router";
import {BookListComponent} from "./book-list/book-list.component";
import {NgModule} from "@angular/core";
import {BookFormComponent} from "./book-form/book-form.component";

const routes: Routes = [
  {
    path: 'books', component: BookListComponent
  },
  {
    path: 'addBook', component: BookFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
