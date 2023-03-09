import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLinkComponent } from '../../components';
import {
  ConversationComponent,
  Message,
  MessageBubbleComponent,
  MessageComponent,
  MessageGroupComponent,
  MessageStatus,
  MessageUser,
} from 'projects/shared-components-lib/src/lib';
import { users } from './shared/message-data';
import { harvard_sentences } from '../../data/harvard-sentences';
import { rand_from_list } from '../../utils/list';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ComponentLinkComponent,
    MessageBubbleComponent,
    MessageComponent,
    MessageGroupComponent,
    ConversationComponent
  ],
  template: `
    <div class="p-4 flex flex-col">

      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        <app-component-link name="Message Bubble" [link]="['/', 'chat', 'message-bubble']">
          <nyhcr-message-bubble [message]="this.bubble[0]" />
        </app-component-link>

        <app-component-link name="Message" [link]="['/', 'chat', 'message']">
          <nyhcr-message [message]="this.message[0]"/>
        </app-component-link>

        <app-component-link name="Message Group" [link]="['/', 'chat', 'message-group']">
          <nyhcr-message-group [messages]="this.group" />
        </app-component-link>

        <app-component-link name="Conversation" [link]="['/', 'chat', 'conversation']">
          <nyhcr-conversation [messages]="this.convo" [currentUser]="this.sent" />
        </app-component-link>
      </div>

    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootComponent {
  messageUsers = [...users] as MessageUser[];
  sent = users[0];
  rec = users[1]

  currentStatus: MessageStatus = 'READ';
  readonly bubble = this.genMessages([this.sent], 1);
  readonly message = this.genMessages([this.sent], 1);
  readonly group = this.genMessages([this.sent, this.sent, this.sent], 3);
  readonly convo = this.genMessages([this.sent, this.rec, this.rec, this.sent, this.sent], 5);


  genMessages(userList: MessageUser[], numMessages: number): Message[] {
    const message_content_generator = (): string =>
      rand_from_list(harvard_sentences);

    const message_owner_generator = (): MessageUser =>
      rand_from_list(this.messageUsers);

    return [...Array(numMessages)]
      .map((_, index) => {
        return {
          id: `test${index}`,
          content: message_content_generator(),
          owner: userList[index] ?? message_owner_generator(),
          timestamp: new Date(),
          status: this.currentStatus,
        };
      })
      .reverse();
  }

}
