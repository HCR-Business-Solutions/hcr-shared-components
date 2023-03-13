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
import {
  DocumentationDividerComponent,
  DocumentationSectionComponent,
  InteractiveShowcaseComponent,
  PropertyEdits,
} from '../../components';
import { harvard_sentences } from '../../data/harvard-sentences';
import { rand_from_list } from '../../utils/list';
import { MessageGroupDocumentationComponent } from './documentation';
import {
  messageGroupOptionsPack,
  propsAsMessageGroupOptions,
  users,
} from './shared/message-data';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MessageGroupComponent,
    MessageGroupDocumentationComponent,
    DocumentationDividerComponent,
    DocumentationSectionComponent,
    InteractiveShowcaseComponent,
  ],
  template: `
    <div class="flex flex-col gap-4 my-4" *ngIf="this.edits">
    <app-message-group-documentation />
    <app-documentation-divider />
    <app-documentation-section
      title="Demo"
      class="px-4"
    >
      <app-interactive-showcase
        [edits]="this.edits"
        (editsChange)="this.handleEditsChange($event)"
        class="px-4"
      >
        <nyhcr-message-group
          [messages]="this.messages"
          [options]="this.options"
        />
      </app-interactive-showcase>
    </app-documentation-section>
  </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageGroupShowcaseComponent {
  messageUsers = [...users] as MessageUser[];
  sent = users[0];
  rec = users[1];

  public edits: PropertyEdits = {
    demo: {
      properties: {
        messageCount: 3,
      },
      info: {
        messageCount: 'number',
      },
    },
    messageGroupOptions: messageGroupOptionsPack,
  };

  messages: Message[] = this.genMessages();

  public handleEditsChange(editChange: PropertyEdits): void {
    this.edits = editChange;
    this.messages = this.genMessages();
  }

  genMessages(): Message[] {
    const count = this.edits
      ? (this.edits?.['demo'].properties['messageCount'] as number) ?? 3
      : 3;

    const message_content_generator = (): string =>
      rand_from_list(harvard_sentences);

    const message_owner_generator = (): MessageUser =>
      rand_from_list(this.messageUsers);

    return [...Array(count)]
      .map((_, index) => {
        return {
          id: `test${index}`,
          content: message_content_generator(),
          owner: message_owner_generator(),
          timestamp: new Date(),
          status: 'READ' as MessageStatus,
        };
      })
      .reverse();
  }

  get options(): MessageGroupOptions {
    return propsAsMessageGroupOptions(
      this.edits['messageGroupOptions'].properties
    );
  }
}
