import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MessageComponent } from './message/message.component';
import {
  Message,
  MessageBubbleOptions,
  MessageGroupOptions,
  MessageOptions,
  MessageType,
} from './message/types';
import { MessageGrouping } from './message/types/message-grouping';

@Component({
  selector: 'nyhcr-message-group',
  standalone: true,
  imports: [CommonModule, MessageComponent],
  template: `
    <div class="message-group" *ngIf="this.messages.length > 0">
      <nyhcr-message
        *ngFor="
          let message of this.messages;
          first as isFirst;
          last as isLast;
        "
        [message]="message"
        [options]="this.getMessageOptions(isFirst, isLast)"
      />
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

  get hasAvatar(): boolean {
    return !!this.messages[0].owner.icon;
  }

  public getMessageOptions(isFirst: boolean, isLast: boolean): MessageOptions {
    return {
      messageType: this.messageType,
      offsetAvatar:
        (this.options?.offsetAvatar ?? !isLast) &&
        this.messageType === 'RECEIVED' &&
        this.hasAvatar,
      showAvatar:
        (this.options?.showAvatar ?? isLast) && this.messageType === 'RECEIVED',
      grouping: this.calcGrouping(isFirst, isLast),
      bubble: this.bubbleOptions(isFirst),
      timestamp: this.options?.timestamp,
    };
  }

  private calcGrouping(isFirst: boolean, isLast: boolean): MessageGrouping {
    return isFirst && isLast
      ? 'NONE'
      : isFirst
      ? 'END'
      : isLast
      ? 'START'
      : 'INNER';
  }

  private bubbleOptions(isFirst: boolean): MessageBubbleOptions {
    return {
      displayOwner: this.options?.bubble?.displayOwner,
      displayTimestamp: this.options?.bubble?.displayTimestamp,
      displayStatus:
        this.options?.bubble?.displayStatus !== undefined
          ? this.options?.bubble?.displayStatus
          : isFirst,
      messageType: this.messageType,
      styles: this.options?.bubble?.styles,
    };
  }
}
