import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Message,
  MessageBubbleOptions,
  MessageTimestampOptions,
  MessageUser,
} from './message';
import { MessageGroupComponent } from './message-group.component';

export interface ConversationOptions {
  bubble?: MessageBubbleOptions;
  timestamp?: MessageTimestampOptions;
}

@Component({
  selector: 'nyhcr-conversation',
  standalone: true,
  imports: [CommonModule, MessageGroupComponent],
  template: `
    <div class="conversation" *ngIf="this.messages.length > 0">
      <nyhcr-message-group
        *ngFor="let group of this.groupedMessages; index as i"
        [messages]="this.group"
        [options]="{
          messageType:
            this.group[0].owner.id === this.currentUser.id
              ? 'SENT'
              : 'RECEIVED',
          bubble: bubbleOptions(i),
          timestamp: this.options?.timestamp
        }"
      ></nyhcr-message-group>
    </div>
  `,
  styles: [
    `
      .conversation {
        display: flex;
        flex-direction: column-reverse;
        gap: 2rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConversationComponent {
  @Input() messages: Message[] = [];
  @Input() currentUser!: MessageUser;

  @Input() options?: ConversationOptions;

  get groupedMessages(): Message[][] {
    return this.messages.reduce((acc: Message[][], cur: Message) => {
      if (acc.length && acc[acc.length - 1][0].owner.id === cur.owner.id) {
        acc[acc.length - 1].push(cur);
      } else {
        acc.push([cur]);
      }
      return acc;
    }, []);
  }

  bubbleOptions(index: number): MessageBubbleOptions {
    const last_groups = this.groupedMessages.splice(0, 2);
    const last_sent =
      last_groups[0][0].owner.id === this.currentUser.id
        ? last_groups[0]
        : last_groups[1];
    const current = this.groupedMessages[index];
    const isLatestSent = current[0].id === last_sent[0].id;
    return {
      displayOwner: this.options?.bubble?.displayOwner,
      displayTimestamp: this.options?.bubble?.displayTimestamp,
      displayStatus:
        this.options?.bubble?.displayStatus !== undefined
          ? this.options?.bubble?.displayStatus
          : isLatestSent
          ? undefined
          : false,
      styles: this.options?.bubble?.styles,
    };
  }
}
