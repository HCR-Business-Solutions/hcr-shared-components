import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from './types/message';
import {
  MessageTimestampComponent,
  MessageTimestampOptions,
} from './message-timestamp.component';
import { MessageType } from './types';

export interface BubbleCorners {
  topLeft: boolean;
  topRight: boolean;
  bottomRight: boolean;
  bottomLeft: boolean;
}

export interface MessageBubbleOptions {
  displayOwner?: boolean;
  displayTimestamp?: boolean;
  rounding?: {
    radius: string;
    corners?: Partial<BubbleCorners>;
  };
}

@Component({
  selector: 'nyhcr-message-bubble',
  standalone: true,
  imports: [CommonModule, MessageTimestampComponent],
  template: `
    <div
      class="message-bubble-container"
      [class.received-message]="this.messageType === 'RECEIVED'"
      [class.sent-message]="this.messageType === 'SENT'"
      [ngStyle]="{ 'border-radius': this.borderRadius }"
    >
      <div class="meta-content">
        <div class="owner" *ngIf="this.options?.displayOwner">
          {{ this.message.owner.display }}
        </div>
        <nyhcr-message-timestamp
          *ngIf="this.options?.displayTimestamp"
          [message]="this.message"
          [options]="this.timestampOptions"
        ></nyhcr-message-timestamp>
      </div>
      <div class="message-content">
        {{ this.message.content }}
      </div>
    </div>
  `,
  styles: [
    `
      .message-bubble-container {
        overflow: hidden;
        padding: 0.75rem;
      }
    `,
    `
      .received-message {
        background-color: #f1f1f1;
        color: #1c1917;
        border: 1px solid rgba(28, 25, 23, 0.2);
      }
    `,
    `
      .sent-message {
        background-color: #e9d5ff;
        color: #1c1917;
        border: 1px solid rgba(88, 28, 135, 0.2);
      }
    `,
    `
      .message-content {
        overlow-wrap: break-word;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageBubbleComponent {
  @Input() message!: Message;
  @Input() messageType: MessageType = 'SENT';
  @Input() options?: MessageBubbleOptions;

  @Input() timestampOptions?: MessageTimestampOptions;

  public get borderRadius(): string {
    const topLeft = this.options?.rounding?.corners?.topLeft
      ? this.options.rounding.radius ?? 0
      : 0;
    const topRight = this.options?.rounding?.corners?.topRight
      ? this.options.rounding.radius ?? 0
      : 0;
    const bottomRight = this.options?.rounding?.corners?.bottomRight
      ? this.options.rounding.radius ?? 0
      : 0;
    const bottomLeft = this.options?.rounding?.corners?.bottomLeft
      ? this.options.rounding.radius ?? 0
      : 0;

    return `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
  }
}
