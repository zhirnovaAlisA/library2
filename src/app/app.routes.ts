import { Routes, RouterModule } from '@angular/router';
import { BooksShowComponent } from './books-show/books-show.component';
import { BooksEditAddComponent } from './books-edit-add/books-edit-add.component'; 
import { NgModule } from '@angular/core'; 


const routeConfig: Routes = [
    {
      path: '',
      component: BooksShowComponent,
      title: 'Главная'
    },
    {
      path: 'edit-book/:id',
      component: BooksEditAddComponent,
      title: 'Редактирование книги'
    }
  ];
  
  @NgModule({ //нашла такую часть кода, не уверена, что оно нужно
    imports: [RouterModule.forRoot(routeConfig)],
    exports: [RouterModule]
  })

  export class AppRoutesModule { };

