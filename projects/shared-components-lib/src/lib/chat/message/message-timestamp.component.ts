import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from './types';

export interface MessageTimestampOptions {}

@Component({
  selector: 'nyhcr-message-timestamp',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>message-timestamp works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageTimestampComponent {
  @Input() message!: Message;
  @Input() options?: MessageTimestampOptions;
}
