import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Message } from './types';

export interface MessageTimestampOptions {
  format: string;
}

@Component({
  selector: 'nyhcr-message-timestamp',
  standalone: true,
  imports: [CommonModule, DatePipe],
  template: `<span class="message-timestamp">{{
    this.message.timestamp | date : this.format
  }}</span> `,
  styles: [
    `
      .message-timestamp {
        color: rgba(0, 0, 0, 0.6);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageTimestampComponent {
  @Input() message!: Message;
  @Input() options?: MessageTimestampOptions;

  get format(): string {
    const getWeek = (date: Date): number => {
      const start = new Date(date.getFullYear(), 0, 1);
      const days = Math.floor(
        (date.getTime() - start.getTime()) / (24 * 60 * 60 * 1000)
      );

      return Math.ceil(days / 7);
    };

    if (this.options && this.options.format && this.options.format !== 'auto') return this.options.format;
    const sent = this.message.timestamp;
    const now = new Date();

    const sameDate = sent.getDate() === now.getDate();
    const sameMonth = sent.getMonth() === now.getMonth();
    const sameYear = sent.getFullYear() === now.getFullYear();
    const sameWeek = getWeek(sent) === getWeek(now);

    if (sameDate && sameMonth && sameYear) return 'hh:mm';
    if (sameWeek) return 'E, hh:mm';
    if (sameYear) return 'MMM dd, hh:mm';

    return 'short';
  }
}
