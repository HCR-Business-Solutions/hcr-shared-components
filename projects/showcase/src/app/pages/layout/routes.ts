import { Route } from '@angular/router';
import { ToolbarShowcaseComponent } from './toolbar-showcase.component';

export const LAYOUT_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'toolbar',
  },
  {
    path: 'toolbar',
    component: ToolbarShowcaseComponent,
  },
];
