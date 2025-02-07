import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { UserComponent } from './app/components/user/user.component';

const routes: Routes = [
  { path: '', component: UserComponent }, 
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()] 
});
