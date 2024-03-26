import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooksShowComponent } from './books-show/books-show.component';


@Component({
  selector: 'app-root', //селектор, который в index.html, мы отрисовываем именно этот компонент
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet]
})


export class AppComponent { }  