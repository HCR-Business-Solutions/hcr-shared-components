import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nyhcr-message-secondary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      message-secondary works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageSecondaryComponent {

}
