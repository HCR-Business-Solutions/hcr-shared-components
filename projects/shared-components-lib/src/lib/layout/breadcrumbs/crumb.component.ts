import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from './types';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'nyhcr-crumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="crumb-container">
      <a class="crumb-link">
        <ng-container *ngIf="crumb.icon; then icon; else text" />
      </a>
      <span class="crumb-separator" *ngIf="!this.hideSeparator"></span>
    </div>

    <ng-template #icon>
    </ng-template>
    <ng-template #text>
      {{this.crumb.name}}
    </ng-template>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrumbComponent {
  @Input() crumb!: Breadcrumb;
  @Input() hideSeparator: boolean = false;
}
