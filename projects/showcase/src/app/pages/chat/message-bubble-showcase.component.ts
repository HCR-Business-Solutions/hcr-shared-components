import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Message,
  MessageBubbleComponent,
  MessageBubbleOptions,
  MessageStatus,
  MessageTimestampOptions,
  MessageType,
  MessageUser,
} from 'projects/shared-components-lib/src/lib';
import {
  InteractiveShowcaseComponent,
  Properties,
  PropertyEdits,
  PropertyInfo,
} from '../../components';
import {
  bubblePropPack,
  messagePropPack,
  propsAsBubbleOptions,
  propsAsMessage,
  propsAsTimestampOptions,
  timestampPack,
  users,
} from './shared/message-data';
import { MessageBubbleDocumentationComponent } from './documentation/message-bubble-documentation.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MessageBubbleComponent,
    InteractiveShowcaseComponent,
    MessageBubbleDocumentationComponent,
  ],
  template: `
  <div class="flex flex-col gap-4 my-4">
    <app-message-bubble-documentation />
    <hr class="mx-6 md:mx-12 lg:mx-20 xl:mx-28"/>
    <app-interactive-showcase
      [(edits)]="this.edits"
      class="px-4"
    >
      <nyhcr-message-bubble
        [message]="this.message"
        [options]="this.options"
        [timestampOptions]="this.timestampOptions"
       />
    </app-interactive-showcase>
  </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageBubbleShowcaseComponent {
  readonly userSelf = users[0];
  readonly userOther = users[1];

  edits: PropertyEdits = {
    messageType: {
      properties: {
        messageType: 'SENT',
      },
      info: {
        messageType: ['SENT', 'RECEIVED'],
      },
    },
    message: messagePropPack,
    bubbleOptions: bubblePropPack,
    timestampOptions: timestampPack,
  };

  get messageType(): MessageType {
    return this.edits['messageType'].properties['messageType'] as MessageType;
  }

  get message(): Message {
    return propsAsMessage(this.edits['message'].properties, 'example');
  }

  get options(): MessageBubbleOptions {
    return propsAsBubbleOptions(this.edits['bubbleOptions'].properties);
  }

  get timestampOptions(): MessageTimestampOptions {
    return propsAsTimestampOptions(this.edits['timestampOptions'].properties);
  }
}
