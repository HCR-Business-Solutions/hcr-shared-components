import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/root.component').then((mod) => mod.RootComponent),
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
  {
    path: 'chat',
    loadChildren: () =>
      import('./pages/chat/routes').then((mod) => mod.CHAT_ROUTES),
  },
];
