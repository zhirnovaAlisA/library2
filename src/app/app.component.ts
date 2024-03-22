import { Component } from '@angular/core';
import { RouterModule, RouterOutlet,   RouterLink, RouterLinkActive} from '@angular/router';
import { BooksShowComponent } from './books-show/books-show.component';


@Component({
  selector: 'app-root', //селектор, который в index.html, мы отрисовываем именно этот компонент
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export  class AppComponent { } 