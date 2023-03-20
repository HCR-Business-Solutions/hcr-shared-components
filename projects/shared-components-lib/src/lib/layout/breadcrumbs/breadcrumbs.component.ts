import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from './types';
import { CrumbComponent } from './crumb.component';

@Component({
  selector: 'nyhcr-breadcrumbs',
  standalone: true,
  imports: [CommonModule, CrumbComponent],
  template: `
    <div class="breadcrumb-container">
      <nyhcr-crumb
        *ngFor="let crumb of this.breadcrumbs; last as isLast"
        [crumb]="crumb" [hideSeparator]="!isLast"
      />
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: Breadcrumb[] = [];
}
