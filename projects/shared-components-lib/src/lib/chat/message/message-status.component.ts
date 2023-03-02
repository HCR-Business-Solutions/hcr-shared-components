import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from './types';

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
  @Input() message!: Message;
}
