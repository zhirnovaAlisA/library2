import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Book } from '../models/book.model';
import { CommonModule } from '@angular/common';
import { BookService } from '../services/book.service';
import {Input} from '@angular/core';

@Component({
  selector: 'app-books-show',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterModule],
  templateUrl: './books-show.component.html',
  styleUrl: './books-show.component.css'
})
// export class BooksShowComponent {
//   books: Book[] = [
//     { id: 1, title: 'Война и мир', author: 'Толстой', genre: 'Роман', cover_type: 'Мягкая', amount: 4, price: 799, purpose: 'Отдых'},
//     { id: 2, title: 'Мастер и Маргарита', author: 'Булгаков', genre: 'Роман', cover_type: 'Твёрдая', amount: 6, price: 1499, purpose: 'Образование'},
//   ];
//   deleteBook(id: number): void {
//     this.books = this.books.filter(book => book.id !== id);
//   }
// }
export class BooksShowComponent implements OnInit {
  books: Book[] = [];
  @Input() book: any;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.books = this.bookService.getBooks();
  }
  

  deleteBook(id: number): void {
    this.bookService.deleteBook(id); //метод удаления книги из сервиса
    this.loadBooks(); // После удаления обновление списка книг в компоненте
  }
}