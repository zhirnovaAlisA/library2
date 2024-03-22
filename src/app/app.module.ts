//абсолютно все компоненты и модули, которые присутствуют в проекте
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
import {AppRoutesModule} from './app.routes'; //добавлено
import { RouterModule, RouterOutlet,   RouterLink, RouterLinkActive} from '@angular/router';
import { BooksShowComponent } from './books-show/books-show.component';
import { BooksEditAddComponent } from './books-edit-add/books-edit-add.component';

@NgModule({
  declarations: [ //все компоненты
    // AppComponent, 
  ],
  imports: [ //все модули
    BrowserModule,
    AppRoutesModule,
    RouterModule, RouterOutlet, RouterLink, RouterLinkActive, BooksShowComponent, BooksEditAddComponent
    // RouterModule.forRoot(routeConfig), //добавлено, указание всех URL-адресов, которые мы отслеживаем(переменная со всеми урлами из рутс)
  ],
  providers: [],
//   bootstrap: [AppComponent],
})
export class AppModule { }

