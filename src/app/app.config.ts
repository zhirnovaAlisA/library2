// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';

// // import routeConfig from './app.routes';
// import {AppRoutesModule} from './app.routes';

// // export const appConfig: ApplicationConfig = {
// //   providers: [provideClientHydration()]
// // };

// import { Routes } from '@angular/router';


// // export const appConfig: ApplicationConfig = {
// //   providers: [provideRouter(routeConfig)]
// // };

import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';

// import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BooksShowComponent } from './books-show/books-show.component';
import { BooksEditAddComponent } from './books-edit-add/books-edit-add.component';

const routes: Routes = [
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

export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration(), provideRouter(routes)]
};