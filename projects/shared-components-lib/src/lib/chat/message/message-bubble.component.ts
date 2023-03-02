import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MessageStatusComponent } from './message-status.component';
import {
  MessageTimestampComponent,
  MessageTimestampOptions
} from './message-timestamp.component';
import { MessageType } from './types';
import { Message } from './types/message';

export interface BubbleCorners {
  topLeft: boolean;
  topRight: boolean;
  bottomRight: boolean;
  bottomLeft: boolean;
}

export interface MessageBubbleOptions {
  displayOwner?: boolean;
  displayTimestamp?: boolean;
  displayStatus?: boolean;
  rounding?: {
    radius: string;
    corners?: Partial<BubbleCorners>;
  };
}

@Component({
  selector: 'nyhcr-message-bubble',
  standalone: true,
  imports: [CommonModule, MessageTimestampComponent, MessageStatusComponent],
  template: `
    <div
      class="message-bubble-container"
      [class.received-message]="this.messageType === 'RECEIVED'"
      [class.sent-message]="this.messageType === 'SENT'"
      [ngStyle]="{ 'border-radius': this.borderRadius }"
    >
      <div class="meta-content" *ngIf="this.metaPresent">
        <div class="owner" *ngIf="this.displayOwner">
          {{ this.message.owner.display }}
        </div>
        <nyhcr-message-timestamp
          *ngIf="this.options?.displayTimestamp"
          [message]="this.message"
          [options]="this.timestampOptions"
        ></nyhcr-message-timestamp>
        <div class="spacer" *ngIf="this.displayStatus"></div>
        <div class="status-container" *ngIf="this.displayStatus">
          <nyhcr-message-status [message]="this.message"></nyhcr-message-status>
        </div>
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
    `
      .meta-content {
        font-size: 0.75rem;
        margin-top: -0.25rem;
        display: flex;
        flex-direction: row;
        gap: 0.25rem;
      }
    `,
    `
      .owner {
        font-weight: 700;
      }
    `,
    `
    .spacer {
      flex-grow: 1;
    }
    `
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

  get displayOwner(): boolean {
    return (
      this.options?.displayOwner !== undefined ? this.options?.displayOwner : this.messageType === 'RECEIVED'
    );
  }

  get displayStatus(): boolean {
    return this.options?.displayStatus !== undefined ? this.options?.displayStatus : this.messageType === 'SENT';
  }

  get metaPresent(): boolean {
    return !!(
      this.displayOwner ||
      this.options?.displayTimestamp ||
      this.displayStatus
    );
  }
}
