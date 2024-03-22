//абсолютно все компоненты и модули, которые присутствуют в проекте
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import routeConfig from './app.routes'; //добавлено
import { RouterModule, Routes } from '@angular/router'; //добавлено

@NgModule({
  declarations: [ //все компоненты
    AppComponent
  ],
  imports: [ //все модули
    BrowserModule,
    RouterModule.forRoot(routeConfig), //добавлено, указание всех URL-адресов, которые мы отслеживаем(переменная со всеми урлами из рутс)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
