import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Book } from '../models/book.model';
import { CommonModule } from '@angular/common';
import { BookService } from '../services/book.service';
import {Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-show',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterModule],
  templateUrl: './books-show.component.html',
  styleUrl: './books-show.component.css'
})

export class BooksShowComponent implements OnInit {
  books: Book[] = [];
  // @Input() book: any;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.books = this.bookService.getBooks();
  }

  navigateToAddBook(): void {
    // определение нового id для добавления новой книги
    let newId: number;
    if (this.books.length > 0) {
      newId = this.books[this.books.length - 1].id + 1; // Увеличиваем id последней книги на 1
    } else {
      newId = 1; // Если список книг пуст, начинаем с id = 1
    }
    this.router.navigate(['/edit-book', newId]); // Перенаправление на страницу редактирования с новым id
  }
  

  deleteBook(id: number): void {
    this.bookService.deleteBook(id); //метод удаления книги из сервиса
    this.loadBooks(); // После удаления обновление списка книг в компоненте
  }
}