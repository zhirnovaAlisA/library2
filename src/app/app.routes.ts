import { Routes } from '@angular/router';
import { BooksShowComponent } from './books-show/books-show.component';
import { BooksEditAddComponent } from './books-edit-add/books-edit-add.component'; 
//import { NgModule } from '@angular/core'; 


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
  
  export default routeConfig;

// export const routes: Routes = [
//     { path: '', component: BooksShowComponent, title: 'Главная' }, // Главная страница
//     { path: 'edit-book/:id', component: BooksEditAddComponent, title: 'Редактирование' } // Страница редактирования с параметром id
// ];

// @NgModule({ //нашла такую часть кода, не уверена, что оно нужно
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })

// export class AppRoutingModule { };
// export const appRoutes = routes;