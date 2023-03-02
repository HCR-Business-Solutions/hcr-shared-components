import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nyhcr-message-status',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      message-status works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageStatusComponent {

}
