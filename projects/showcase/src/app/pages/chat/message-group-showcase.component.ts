import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MessageGroupComponent,
  MessageGroupOptions,
} from 'projects/shared-components-lib/src/lib';
import {
  Message,
  MessageStatus,
  MessageUser,
} from 'projects/shared-components-lib/src/lib/chat/message/types';
import { MessageGrouping } from 'projects/shared-components-lib/src/lib/chat/message/types/message-grouping';
import { harvard_sentences } from '../../data/harvard-sentences';
import { rand_from_list } from '../../utils/list';

@Component({
  standalone: true,
  imports: [CommonModule, MessageGroupComponent, FormsModule],
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
          <label for="senderSwitch">Is Sent Messages</label>
        </div>
        <div class="flex flex-col gap-2">
          <input
            id="numMessages"
            type="number"
            inputmode="numeric"
            [(ngModel)]="this.numMessages"
            (ngModelChange)="this.updMessages()"
          />
        </div>
      </div>
      <div class="flex-grow border border-stone-900 p-6">
        <nyhcr-message-group
          [messages]="this.messages"
          [options]="this.options"
        ></nyhcr-message-group>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageGroupShowcaseComponent {
  readonly self: MessageUser = {
    id: 'self',
    display: 'Tester ME',
  };

  readonly other: MessageUser = {
    id: 'other',
    display: 'Some Sender',
  };

  isSentMessage: boolean = false;
  currentStatus: MessageStatus = 'READ';
  grouping: MessageGrouping = 'NONE';
  numMessages: number = 3;

  messages: Message[] = this.genMessages();

  updMessages() {
    this.messages = this.genMessages();
  }

  genMessages(): Message[] {
    const message_content_generator = (): string =>
      rand_from_list(harvard_sentences);

    const message_owner_generator = (): MessageUser =>
      rand_from_list([this.other, this.self]);

    return [...Array(this.numMessages)]
      .map((_, index) => {
        return {
          id: `test${index}`,
          content: message_content_generator(),
          owner: message_owner_generator(),
          timestamp: new Date(),
          status: this.currentStatus,
        };
      })
      .reverse();
  }

  get options(): MessageGroupOptions {
    return {
      messageType: this.isSentMessage ? 'SENT' : 'RECEIVED',
    };
  }
}
