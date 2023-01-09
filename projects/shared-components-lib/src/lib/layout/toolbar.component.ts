import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nyhcr-toolbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toolbar" [style.background-color]="this.backgroundColor">
      <ng-content select="[brand]"></ng-content>
      <ng-content select="[menu]"></ng-content>
    </div>
  `,
  styles: [
    `
      .toolbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        height: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  @Input() backgroundColor: string = '#2b2b2b';
}
