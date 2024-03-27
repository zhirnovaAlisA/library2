import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Book } from '../models/book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books-show',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './books-show.component.html',
  styleUrl: './books-show.component.css'
})
export class BooksShowComponent {
  // books: Book[] = [
  //   { id: 1, title: 'Война и мир', author: 'Толстой', genre: 'Роман', cover_type: 'Мягкая', amount: 4, price: 799, purpose: 'Отдых'},
  //   { id: 2, title: 'Мастер и Маргарита', author: 'Булгаков', genre: 'Роман', cover_type: 'Твёрдая', amount: 6, price: 1499, purpose: 'Образование'},
  // ];
  // deleteBook(id: number): void {
  //   this.books = this.books.filter(book => book.id !== id);
  // }
}
