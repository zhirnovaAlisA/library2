import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
// import { appRoutes } from './app/app.routes';
import routeConfig from './app/app.routes';
import routes from './app/app.routes';
import { RouterModule } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



bootstrapApplication(AppComponent,
  {
    providers: [
      provideRouter(routeConfig)
    ]
  }
).catch(err => console.error(err));


// platformBrowserDynamic().bootstrapModule(AppModule, {
//   imports: [RouterModule.forRoot(routes)], // Используем переменную routes
// })
// .catch(err => console.error(err));

// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module'; 
// import { RouterModule as AppRouterModule } from '@angular/router'; // Переименовываем импорт
// import routeConfig from './app/app.routes'; 

// platformBrowserDynamic().bootstrapModule(AppModule, [AppRouterModule.forRoot(routeConfig)])
//   .catch(err => console.error(err));




