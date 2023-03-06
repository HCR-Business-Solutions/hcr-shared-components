import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Message,
  MessageBubbleComponent,
  MessageStatus,
  MessageUser,
} from 'projects/shared-components-lib/src/lib';
import { Properties, PropertyInfo } from '../../components';

@Component({
  standalone: true,
  imports: [CommonModule, MessageBubbleComponent],
  template: ``,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageBubbleShowcaseComponent {
  readonly self: MessageUser = {
    id: 'self',
    display: 'ME',
  };

  readonly other: MessageUser = {
    id: 'other',
    display: 'Some Sender',
  };

  properties: Properties = {};
  propertyInfo: PropertyInfo = {};

  public get message(): Message {
    return {
      id: 'testId',
      content: this.properties['messageContent'] as string,
      owner: this.properties['messageSent'] ? this.self : this.other,
      status: this.properties['messageStatus'] as MessageStatus,
      timestamp: new Date(this.properties['messageTimestamp'] as string),
    };
  }
}
