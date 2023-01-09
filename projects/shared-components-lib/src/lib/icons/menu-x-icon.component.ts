import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nyhcr-menu-x-icon',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="menu-x-container" [ariaLabel]="this.label"></div>`,
  styles: [
    `
      .menu-x-container {
        width: 100%;
        aspect-ratio: 1/1;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuXIconComponent {
  @Input() state: 'MENU' | 'X' = 'MENU';

  get label(): string {
    return this.state === 'MENU' ? 'menu' : 'close';
  }
}
