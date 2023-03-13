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
import { ProfileIconComponent } from '../../user';

export interface MessageInteractEvent {
  type: 'primary' | 'secondary';
  message: Message;
  event: MouseEvent;
}

export interface MessageOptions {
  messageType?: MessageType;
  showAvatar?: boolean;
  offsetAvatar?: boolean;
  grouping?: MessageGrouping;
  bubble?: MessageBubbleOptions;
  timestamp?: MessageTimestampOptions;
}

@Component({
  selector: 'nyhcr-message',
  standalone: true,
  imports: [CommonModule, MessageBubbleComponent, ProfileIconComponent],
  template: `
  <div style="display: flex; flex-direction: row; align-items: center; gap:.25rem;">
    <div *ngIf="this.showAvatar || this.offsetAvatar" style="width: 32px; height: 32px"
      [style.order]="this.messageType === 'SENT' ? 2 : -1"
    >
      <nyhcr-profile-icon
        [imgSrc]="this.message.owner.icon"
        [userText]="this.message.owner.displayShort"
        [backgroundColor]="this.message.owner.preferredColor"
        *ngIf="this.showAvatar"
      />
    </div>
    <div
      *ngIf="this.message"
      class="message-container"
      [class.message-sender]="this.messageType === 'SENT'"
      [class.message-receiver]="this.messageType === 'RECEIVED'"
      [style.max-width]="this.showAvatar || this.offsetAvatar ? 'calc(90% - 32px - 0.25rem)' : '90%'"
    >
      <nyhcr-message-bubble
        [message]="this.message"
        [options]="this.bubbleOptions"
        [timestampOptions]="this.options?.timestamp"
      ></nyhcr-message-bubble>
    </div>
    </div>
  `,
  styles: [
    `
      .message-container {
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

  get offsetAvatar(): boolean {
    return (this.options?.offsetAvatar ?? false) && !this.showAvatar;
  }

  get showAvatar(): boolean {
    return (
      (this.options?.showAvatar ?? false) &&
      (!!this.message.owner.icon || !!this.message.owner.displayShort)
    );
  }

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
      this.options?.bubble?.styles?.rounding?.corners ?? this.cornerConfig;

    return {
      displayOwner: this.options?.bubble?.displayOwner,
      displayTimestamp: this.options?.bubble?.displayTimestamp,
      displayStatus: this.options?.bubble?.displayStatus,
      messageType: this.messageType,
      styles: {
        rounding: {
          radius: this.options?.bubble?.styles?.rounding?.radius,
          corners,
        },
      },
    };
  }
}
