import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message, MessageType } from './types';
import {
  BubbleCorners,
  MessageBubbleComponent,
  MessageBubbleOptions,
} from './message-bubble.component';
import { MessageTimestampOptions } from './message-timestamp.component';
import { MessageGrouping } from './types/message-grouping';

export interface MessageInteractEvent {
  type: 'primary' | 'secondary';
  message: Message;
  event: MouseEvent;
}

export interface MessageOptions {
  messageType?: MessageType;
  grouping?: MessageGrouping;
  bubble?: MessageBubbleOptions;
  timestamp?: MessageTimestampOptions;
}

@Component({
  selector: 'nyhcr-message',
  standalone: true,
  imports: [CommonModule, MessageBubbleComponent],
  template: `
    <div
      *ngIf="this.message"
      class="message-container"
      [class.message-sender]="this.messageType === 'SENT'"
      [class.message-receiver]="this.messageType === 'RECEIVED'"
    >
      <nyhcr-message-bubble
        [message]="this.message"
        [messageType]="this.messageType"
        [options]="this.bubbleOptions"
        [timestampOptions]="this.options?.timestamp"
      ></nyhcr-message-bubble>
    </div>
  `,
  styles: [
    `
      .message-container {
        max-width: 90%;
        min-width: 2rem;
        width: fit-content;
      }
    `,
    `
      .message-sender {
        margin-left: auto;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent {
  @Input() message!: Message;
  @Input() options?: MessageOptions;

  get messageType(): MessageType {
    return this.options?.messageType ?? 'SENT';
  }

  get grouping(): MessageGrouping {
    return this.options?.grouping ?? 'NONE';
  }

  get cornerConfig(): Partial<BubbleCorners> {
    const isLeft = this.messageType === 'RECEIVED';
    const roundTop = this.grouping === 'NONE' || this.grouping === 'START';
    const roundEnd = this.grouping === 'NONE' || this.grouping === 'END';

    return {
      topLeft: (isLeft && roundTop) || !isLeft,
      topRight: (!isLeft && roundTop) || isLeft,
      bottomRight: (!isLeft && roundEnd) || isLeft,
      bottomLeft: (isLeft && roundEnd) || !isLeft,
    };
  }

  get bubbleOptions(): MessageBubbleOptions {
    const corners =
      this.options?.bubble?.rounding?.corners ?? this.cornerConfig;

    return {
      displayOwner: this.options?.bubble?.displayOwner,
      displayTimestamp: this.options?.bubble?.displayTimestamp,

      rounding: {
        radius: this.options?.bubble?.rounding?.radius ?? '0',
        corners,
      },
    };
  }
}
