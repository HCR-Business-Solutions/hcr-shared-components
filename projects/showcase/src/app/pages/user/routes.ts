import { Route } from '@angular/router';
import { ProfileIconShowcaseComponent } from './profile-icon-showcase.component';

export const USER_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'profile-icon',
  },
  {
    path: 'profile-icon',
    component: ProfileIconShowcaseComponent,
  },
];
