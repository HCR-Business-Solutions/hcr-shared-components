import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Breadcrumb,
  BreadcrumbsComponent,
} from 'projects/shared-components-lib/src/lib';
import { provideIcons } from '@ng-icons/core';
import { heroHome } from '@ng-icons/heroicons/outline';

@Component({
  standalone: true,
  imports: [CommonModule, BreadcrumbsComponent],
  viewProviders: [provideIcons({ heroHome })],
  template: `
    <div class="">
      <nyhcr-breadcrumbs [breadcrumbs]="this.breadcrumbs" />
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbShowcaseComponent {
  readonly breadcrumbs: Breadcrumb[] = [
    {
      url: '/',
      icon: 'heroHome',
      classes: 'text-2xl text-purple-700'
    },
    {
      url: '/example',
      text: 'Example',
    },
    {
      url: '/example/2',
      text: 'Item 2',
    },
  ];
}
