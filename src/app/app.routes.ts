import { Routes } from '@angular/router';

export const routes: Routes = [
   {
      path: 'home',
      loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
   },
   {
      path: 'login',
      loadComponent: () => import('./pages/login/login.page').then((m) => m.LoginComponent),
   },
   {
      path: 'profile',
      loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
   },
   {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
   },
   
];
