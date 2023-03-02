import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConversationComponent, ConversationOptions } from 'projects/shared-components-lib/src/lib';
import {
  Message,
  MessageStatus,
  MessageUser,
} from 'projects/shared-components-lib/src/lib/chat/message/types';
import { harvard_sentences } from '../../data/harvard-sentences';
import { rand_from_list } from '../../utils/list';

@Component({
  standalone: true,
  imports: [CommonModule, ConversationComponent, FormsModule],
  template: `
    <div
      class="m-8 p-4 flex flex-col md:flex-row md:items-center md:justify-center gap-4"
    >
      <div
        class="w-11/12 md:w-1/4 flex flex-col gap-4 border border-stone-900 border-opacity-40 p-8 rounded-lg"
      >
        <div class="flex flex-col gap-2">
          <label for="numMessages">Total conversation messages:</label>
          <input
            id="numMessages"
            type="number"
            inputmode="numeric"
            [(ngModel)]="this.numMessages"
            (ngModelChange)="updMessages()"
          />
        </div>
      </div>
      <div class="flex-grow border border-stone-900 p-6">
        <nyhcr-conversation
          [messages]="this.messages"
          [currentUser]="this.self"
          [options]="this.options"
        ></nyhcr-conversation>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConversationShowcaseComponent {
  readonly self: MessageUser = {
    id: 'self',
    display: 'ME',
  };

  readonly other: MessageUser = {
    id: 'other',
    display: 'Some Sender',
  };


  currentStatus: MessageStatus = MessageStatus.READ;
  numMessages: number = 10;

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

  get options(): ConversationOptions {
    return {
      bubble: {
        displayTimestamp: true,
        displayStatus: false,
        rounding: {
          radius: '0.25rem',
        },
      },
    };
  }
}
