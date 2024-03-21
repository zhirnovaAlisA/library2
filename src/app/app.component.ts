import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BooksShowComponent } from './books-show/books-show.component';

@Component({
  selector: 'app-root',
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
  title = 'library';
}





