import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
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