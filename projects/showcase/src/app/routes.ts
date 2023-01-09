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
  {
    path: 'layout',
    loadChildren: () =>
      import('./pages/layout/routes').then((mod) => mod.LAYOUT_ROUTES),
  },
];
