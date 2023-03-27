import { Route } from '@angular/router';
import { ToolbarShowcaseComponent } from './toolbar-showcase.component';
import { BreadcrumbShowcaseComponent } from './breadcrumb-showcase.component';

export const LAYOUT_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'toolbar',
    data: {
      crumb: 'Components'
    }
  },
  {
    path: 'toolbar',
    component: ToolbarShowcaseComponent,
    data: {
      crumb: 'Toolbar'
    }
  },
  {
    path: 'breadcrumb',
    component: BreadcrumbShowcaseComponent,
    data: {
      crumb: 'Breadcrumb'
    }
  }
];
