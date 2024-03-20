import { Component } from '@angular/core';

@Component({
  selector: 'app-books-show',
  standalone: true,
  imports: [],
  template: `
  <table>
  <tr>
    <th>Название</th>
    <th>Автор</th>
    <th>Действия</th>
  </tr>
  <tr *ngFor="let book of (books$ | async)">
    <td>{{ book.title }}</td>
    <td>{{ book.author }}</td>
    <td>
      <button (click)="deleteBook(book.id)">Удалить</button>
      <button routerLink="/edit-book/{{book.id}}">Редактировать</button>
    </td>
  </tr>
</table>

  `,
  styleUrl: './books-show.component.css'
})
export class BooksShowComponent {

}
