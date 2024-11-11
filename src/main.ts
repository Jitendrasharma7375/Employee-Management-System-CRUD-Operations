import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { routes } from './app/app.routes';  // Import the routes from app.routes.ts

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(RouterModule.forRoot(routes))  // Add RouterModule.forRoot() here
  ]
}).catch(err => console.error(err));
