import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-books-show',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './books-show.component.html',
  styleUrl: './books-show.component.css'
})
export class BooksShowComponent {
  books: Book[] = [
    { id: 1, title: 'Война и мир', author: 'Толстой' },
    { id: 2, title: 'Мастер и Маргарита', author: 'Булгаков' },
  ];
  deleteBook(id: number): void {
    this.books = this.books.filter(book => book.id !== id);
  }
}
