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
  showAvatar?: boolean;
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
        *ngFor="
          let message of this.messages;
          first as isFirst;
          last as isLast;
          index as i
        "
        [message]="message"
        [options]="{
          messageType: this.messageType,
          showAvatar: this.options?.showAvatar ?? (isLast && this.messageType === 'RECEIVED'),
          grouping: this.calcGrouping(isFirst, isLast),
          bubble: this.bubbleOptions(i),
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

  bubbleOptions(index: number): MessageBubbleOptions {
    return {
      displayOwner: this.options?.bubble?.displayOwner,
      displayTimestamp: this.options?.bubble?.displayTimestamp,
      displayStatus:
        this.options?.bubble?.displayStatus !== undefined
          ? this.options?.bubble?.displayStatus
          : index === 0
          ? true
          : false,
      messageType: this.messageType,
      styles: this.options?.bubble?.styles,
    };
  }
}
