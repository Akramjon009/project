import { Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { ProfileComponent } from './component/pages/profile/profile.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
];
