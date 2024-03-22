// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';

// // import routeConfig from './app.routes';
// import {AppRoutesModule} from './app.routes';

// // export const appConfig: ApplicationConfig = {
// //   providers: [provideClientHydration()]
// // };

// import { Routes } from '@angular/router';


// // export const appConfig: ApplicationConfig = {
// //   providers: [provideRouter(routeConfig)]
// // };

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration()]
};