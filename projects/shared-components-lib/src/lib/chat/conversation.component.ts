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
        *ngFor="let group of this.groupedMessages"
        [messages]="this.group"
        [options]="{
          messageType:
            this.group[0].owner.id === this.currentUser.id
              ? 'SENT'
              : 'RECEIVED',
          bubble: this.options?.bubble,
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
}
