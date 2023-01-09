import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nyhcr-dropdown-menu-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      dropdown-menu-item works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownMenuItemComponent {

}
