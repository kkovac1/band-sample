import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@features/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('@features/about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'reservations',
    loadComponent: () =>
      import('@features/reservations/reservations.component').then(
        (c) => c.ReservationsComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('@features/contact/contact.component').then(
        (c) => c.ContactComponent
      ),
  },
  { path: '**', redirectTo: 'error/404' },
];
