import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DocumentationDividerComponent,
  DocumentationHeaderComponent,
  DocumentationSectionComponent,
  TypeDocumentationComponent,
  TypeInfo,
} from '../../components';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    DocumentationHeaderComponent,
    DocumentationDividerComponent,
    DocumentationSectionComponent,
    TypeDocumentationComponent
  ],
  template: `
    <div class="flex flex-col gap-4 my-4">
      <div class="flex flex-col gap-2 px-4">
        <app-documentation-header
          title="Chat Types"
          description="Type definition for all types in the chat section."
        />
      </div>
      <app-documentation-divider />
      <div class="flex flex-col gap-8 px-4">
        <ng-container *ngFor="let type of this.types">
          <app-type-documentation [type]="type" />
          <app-documentation-divider />
        </ng-container>
      </div>

    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypesComponent {
  readonly types: TypeInfo[] = [
    { // Message Type
      id: 'message',
      name: 'Message',
      properties: [
        {
          key: 'id',
          type: 'string'
        },
        {
          key: 'content',
          type: 'string',
        },
        {
          key: 'timestamp',
          type: 'Date'
        },
        {
          key: 'status',
          type: 'MessageStatus',
          typesection: '#status'
        },
        {
          key: 'owner',
          type: 'MessageUser',
          typesection: '#user'
        }
      ]
    },
    { // Message Status Type
      name: 'MessageStatus',
      id: 'status',
      isDef: true,
      properties: [
        {
          key: '',
          type: '"ERROR" | "UNSENT" | "SENT" | "READ"'
        }
      ]
    },
    { // Message User Type
      name: 'Message User',
      id: 'user',
      properties: [
        {
          key: 'id',
          type: 'string',
        },
        {
          key: 'display',
          type: 'string',
        },
        {
          key: 'displayShort',
          type: 'string',
        },
        {
          key: 'preferredColor',
          type: 'string',
        },
        {
          key: 'icon',
          type: 'string',
        },
      ]
    },
    { // Message Bubble Options
      name: 'MessageBubbleOptions',
      id: 'messageBubbleOptions',
      properties: [
        {
          key: 'displayOwner',
          type: 'boolean',
        },
        {
          key: 'displayTimestamp',
          type: 'boolean',
        },
        {
          key: 'displayStatus',
          type: 'boolean',
        },
        {
          key: 'messageType',
          type: 'MessageType',
          typesection: '#messageType'
        },
        {
          key: 'styles',
          type: 'BubbleStyles',
          typesection: '#bubbleStyles'
        }
      ]
    },
    { // Bubble Styles
      name: 'Bubble Styles',
      id: 'bubbleStyles',
      properties: [
        {
          key: 'rounding',
          type: 'BubbleRounding',
          typesection: '#bubbleRounding'
        },
        {
          key: 'backgroundColor',
          type: 'string',
        },
        {
          key: 'textColor',
          type: 'string',
        },
        {
          key: 'borderColor',
          type: 'string',
        },
        {
          key: 'borderStyle',
          type: 'string',
        },
        {
          key: 'borderWidth',
          type: 'string',
        },
        {
          key: 'padding',
          type: 'string',
        },
        {
          key: 'textAlign',
          type: 'string',
        },
      ]
    },
    { // Bubble Rounding
      name: 'BubbleRounding',
      id: 'bubbleRounding',
      properties: [
        {
          key: 'radius',
          type: 'string',
        },
        {
          key: 'corners',
          type: 'BubbleCorners',
          typesection: '#bubbleCorners'
        },
      ]
    },
    { // Bubble Corners
      name: 'BubbleCorners',
      id: 'bubbleCorners',
      properties: [
        {
          key: 'topLeft',
          type: 'boolean',
        },
        {
          key: 'topRight',
          type: 'boolean',
        },
        {
          key: 'bottomRight',
          type: 'boolean',
        },
        {
          key: 'bottomLeft',
          type: 'boolean',
        },
      ]
    },
    { // MessageType
      name: 'MessageType',
      id: 'messageType',
      isDef: true,
      properties: [
        {key: '', type: '"SENT" | "RECEIVED"'}
      ]
    },
    { // Message Timestamp
      name: 'MessageTimestampOptions',
      id: 'messageTimestampOptions',
      properties: [
        {key: 'format', type: 'string'}
      ]
    },
    { // MessageOptions
      name: 'MessageOptions',
      id: 'messageOptions',
      properties: [
        {
          key: 'messageType',
          type: 'MessageType',
          typesection: '#messageType'
        },
        {
          key: 'showAvatar',
          type: 'boolean',
        },
        {
          key: 'avatarOffset',
          type: 'boolean'
        },
        {
          key: 'grouping',
          type: 'MessageGrouping',
          typesection:'#messageGrouping'
        },
        {
          key: 'bubble',
          type: 'MessageBubbleOptions',
          typesection: '#messageBubbleOptions'
        },
        {
          key: 'timestamp',
          type: 'MessageTimestampOptions',
          typesection: '#messageTimestampOptions'
        }
      ]
    },
    { // MessageGrouping
      name: 'MessageGrouping',
      id: 'messageGrouping',
      isDef: true,
      properties: [
        {key: '', type: '"NONE" | "START" | "INNER" | "END"'}
      ]
    },
    { // MessageGroupOptions
      name: 'MessageGroupOptions',
      id: 'messageGroupOptions',
      properties: [
        {
          key: 'messageType',
          type: 'MessageType',
          typesection: '#messageType'
        },
        {
          key: 'showAvatar',
          type: 'boolean',
        },
        {
          key: 'avatarOffset',
          type: 'boolean'
        },
        {
          key: 'bubble',
          type: 'MessageBubbleOptions',
          typesection: '#messageBubbleOptions'
        },
        {
          key: 'timestamp',
          type: 'MessageTimestampOptions',
          typesection: '#messageTimestampOptions'
        }
      ]
    },
    { // Conversation Options
      name: 'ConversationOptions',
      id: 'converstaionOptions',
      properties: [
        {
          key: 'showAvatar',
          type: 'boolean',
        },
        {
          key: 'avatarOffset',
          type: 'boolean'
        },
        {
          key: 'bubble',
          type: 'MessageBubbleOptions',
          typesection: '#messageBubbleOptions'
        },
        {
          key: 'timestamp',
          type: 'MessageTimestampOptions',
          typesection: '#messageTimestampOptions'
        }
      ]
    }
  ];
}
