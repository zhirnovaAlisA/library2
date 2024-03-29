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

export class BooksShowComponent implements OnInit {
  books: Book[] = [];
  // @Input() book: any;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.books = this.bookService.getBooks();
  }
  

  deleteBook(id: number): void {
    this.bookService.deleteBook(id); //метод удаления книги из сервиса
    console.log(this.books);
    this.loadBooks(); // После удаления обновление списка книг в компоненте
    console.log(this.books);
  }
}