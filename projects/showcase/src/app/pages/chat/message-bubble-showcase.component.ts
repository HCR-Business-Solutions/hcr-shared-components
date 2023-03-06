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

@Component({
  standalone: true,
  imports: [CommonModule, MessageBubbleComponent, InteractiveShowcaseComponent],
  template: `
  <div class="">
    <app-interactive-showcase
      [(edits)]="this.edits"
    >
      <nyhcr-message-bubble
        [messageType]="this.messageType"
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
