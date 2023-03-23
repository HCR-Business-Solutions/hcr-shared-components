import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb, IconCrumb, TextCrumb } from './types';
import { RouterModule } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'nyhcr-crumb',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconComponent],
  template: `
    <div class="crumb-container">
      <a class="crumb-link">
        <ng-container *ngIf="this.isIcon; then useIcon; else useText" />
        <ng-template #useIcon>
          <ng-icon [name]="this.icon" />
        </ng-template>
        <ng-template #useText>
          <span>{{this.text}}</span>
        </ng-template>
      </a>
      <span class="crumb-separator" *ngIf="!this.hideSeparator"></span>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrumbComponent {
  @Input() crumb!: Breadcrumb;
  @Input() hideSeparator: boolean = false;

  get isIcon(): boolean {
    return this.crumbIsIcon(this.crumb);
  }

  get icon(): string {
    if (this.crumbIsIcon(this.crumb)) {
      return this.crumb.icon;
    }
    return '';
  }

  get text(): string {
    if (this.crumbIsText(this.crumb)) {
      return this.crumb.text;
    }
    return '';
  }

  private crumbIsIcon(crumb: Breadcrumb): crumb is IconCrumb {
    return 'icon' in crumb;
  }

  private crumbIsText(crumb: Breadcrumb): crumb is TextCrumb {
    return 'text' in crumb;
  }
}
