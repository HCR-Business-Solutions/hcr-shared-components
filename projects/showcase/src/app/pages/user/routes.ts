import { Route } from '@angular/router';
import { ProfileIconShowcaseComponent } from './profile-icon-showcase.component';

export const USER_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'profile-icon',
    data: {
      crumb: 'Components'
    }
  },
  {
    path: 'profile-icon',
    component: ProfileIconShowcaseComponent,
    data: {
      crumb: 'Profile Icon'
    }
  },
];
