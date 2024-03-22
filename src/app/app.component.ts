import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BooksShowComponent } from './books-show/books-show.component';

@Component({
  selector: 'app-root', //селектор, который в index.html, мы отрисовываем именно этот компонент
  // templateUrl: './app.component.html',
  // imports: [
  //   // BooksShowComponent,
  //   RouterModule,
  // ],
  styleUrls: ['./app.component.css'],
  template: `
  <main>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
// template: `<h1>Hello world!</h1>`,
})
export class AppComponent {
  //здесь указываются те переменные и те данные, которые передаются в html(не только), там есть переменная {{ title }}
  title = 'library';
}





