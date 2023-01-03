import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user',
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./pages/user/routes').then((mod) => mod.USER_ROUTES),
  },
];
