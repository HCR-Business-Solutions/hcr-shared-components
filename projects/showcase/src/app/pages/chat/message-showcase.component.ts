import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MessageBubbleOptions,
  MessageComponent,
  MessageOptions,
} from 'projects/shared-components-lib/src/lib';
import { FormsModule } from '@angular/forms';
import {
  Message,
  MessageStatus,
  MessageUser,
} from 'projects/shared-components-lib/src/lib/chat/message/types';
import { MessageGrouping } from 'projects/shared-components-lib/src/lib/chat/message/types/message-grouping';

@Component({
  standalone: true,
  imports: [CommonModule, MessageComponent, FormsModule],
  template: `
    <div
      class="m-8 p-4 flex flex-col md:flex-row md:items-center md:justify-center gap-4"
    >
      <div
        class="w-11/12 md:w-2/3 flex flex-col gap-4 border border-stone-900 border-opacity-40 p-8 rounded-lg"
      >
        <div class="flex flex-row gap-2">
          <input
            id="senderSwitch"
            type="checkbox"
            [(ngModel)]="this.isSentMessage"
          />
          <label for="senderSwitch">Is Sent Message</label>
        </div>
        <div class="flex flex-col gap-2">
          <label for="content">Message Content</label>
          <input id="content" type="text" [(ngModel)]="this.content" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="grouping">Message Grouping Type</label>
          <select id="grouping" [(ngModel)]="this.grouping">
            <option value="NONE">NONE</option>
            <option value="START">START</option>
            <option value="INNER">INNER</option>
            <option value="END">END</option>
          </select>
        </div>
      </div>
      <div class="flex-grow border border-stone-900 p-6">
        <nyhcr-message
          [message]="this.message"
          [options]="this.options"
        ></nyhcr-message>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageShowcaseComponent {
  readonly self: MessageUser = {
    id: 'self',
    display: 'Tester ME',
  };

  readonly other: MessageUser = {
    id: 'other',
    display: 'Some Sender',
  };

  isSentMessage: boolean = false;
  currentStatus: MessageStatus = MessageStatus.SENT;
  content: string = 'This is a test message';
  grouping: MessageGrouping = 'NONE';

  get message(): Message {
    return {
      id: 'testMesasge',
      content: this.content,
      timestamp: new Date(),
      owner: this.isSentMessage ? this.self : this.other,
      status: this.currentStatus,
    };
  }

  get options(): MessageOptions {
    return {
      grouping: this.grouping,
      messageType: this.isSentMessage ? 'SENT' : 'RECEIVED',
      bubble: {
        rounding: {
          radius: '0.25rem',
        },
      },
    };
  }
}
