import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nyhcr-dropdown-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      dropdown-menu works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownMenuComponent {

}
