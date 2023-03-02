import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Message,
  MessageBubbleOptions,
  MessageComponent,
  MessageTimestampOptions,
  MessageType,
} from './message';
import { MessageGrouping } from './message/types/message-grouping';

export interface MessageGroupOptions {
  messageType?: MessageType;
  bubble?: MessageBubbleOptions;
  timestamp?: MessageTimestampOptions;
}

@Component({
  selector: 'nyhcr-message-group',
  standalone: true,
  imports: [CommonModule, MessageComponent],
  template: `
    <div class="message-group" *ngIf="this.messages.length > 0">
      <nyhcr-message
        *ngFor="let message of this.messages; first as isFirst; last as isLast"
        [message]="message"
        [options]="{
          messageType: this.messageType,
          grouping: this.calcGrouping(isFirst, isLast),
          bubble: this.options?.bubble,
          timestamp: this.options?.timestamp
        }"
      ></nyhcr-message>
    </div>
  `,
  styles: [
    `
      .message-group {
        display: flex;
        flex-direction: column-reverse;
        gap: 0.25rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageGroupComponent {
  @Input() messages: Message[] = [];
  @Input() options?: MessageGroupOptions;

  get messageType(): MessageType {
    return this.options?.messageType ?? 'SENT';
  }

  public calcGrouping(isFirst: boolean, isLast: boolean): MessageGrouping {
    return isFirst && isLast
      ? 'NONE'
      : isFirst
      ? 'END'
      : isLast
      ? 'START'
      : 'INNER';
  }
}
