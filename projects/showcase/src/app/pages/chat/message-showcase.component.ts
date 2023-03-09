import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  Message,
  MessageComponent,
  MessageOptions,
} from 'projects/shared-components-lib/src/lib';
import {
  DocumentationDividerComponent,
  DocumentationSectionComponent,
  InteractiveShowcaseComponent,
  PropertyEdits,
} from '../../components';
import { MessageDocumentationComponent } from './documentation';
import {
  users,
  messagePropPack,
  propsAsMessage,
  messageOptionPack,
  propsAsMessageOptions,
} from './shared/message-data';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MessageComponent,
    MessageDocumentationComponent,
    InteractiveShowcaseComponent,
    DocumentationDividerComponent,
    DocumentationSectionComponent,
  ],
  template: `
  <div class="flex flex-col gap-4 my-4">
    <app-message-documentation />
    <app-documentation-divider />
    <app-documentation-section
      title="Demo"
      class="px-4"
    >
      <app-interactive-showcase
        [(edits)]="this.edits"
        class="px-4"
      >
        <nyhcr-message
          [message]="this.message"
          [options]="this.options"
        />
      </app-interactive-showcase>
    </app-documentation-section>
  </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageShowcaseComponent {
  readonly userSelf = users[0];
  readonly userOther = users[1];

  edits: PropertyEdits = {
    message: messagePropPack,
    messageOptions: messageOptionPack,
  };

  get message(): Message {
    return propsAsMessage(this.edits['message'].properties, 'example');
  }

  get options(): MessageOptions {
    return propsAsMessageOptions(this.edits['messageOptions'].properties);
  }
}
