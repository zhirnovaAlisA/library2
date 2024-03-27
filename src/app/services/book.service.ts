import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

//класс является инъекционным (сервисом) и может быть внедрен в другие классы как зависимость
@Injectable({
//будет предоставлен в корневом модуле приложения
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    { id: 1, title: 'Война и мир', author: 'Толстой', genre: 'Роман', cover_type: 'Мягкая', amount: 4, price: 799, purpose: 'Отдых'},
    { id: 2, title: 'Мастер и Маргарита', author: 'Булгаков', genre: 'Роман', cover_type: 'Твёрдая', amount: 6, price: 1499, purpose: 'Образование'},
  ];

  constructor() { }

  //все книги
  getBooks(): Book[] {
    return this.books;
  }

  //нужная книга
  getBookById(id: number): Book | undefined {
    return this.books.find(b => b.id === id);
  }

  //удаление книги
  deleteBook(id: number): void {
    this.books = this.books.filter(book => book.id !== id);
  }

  //добавление новой книги
  addBook(book: Book): void {
    this.books.push(book);
  }

  //если такой индекс был, книга обновляется 
  editBook(editedBook: Book): void {
    const index = this.books.findIndex(book => book.id === editedBook.id);
    if (index !== -1) {
      this.books[index] = editedBook;
    }
  }
}
