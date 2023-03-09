import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ConsiderationComponent,
  DocumentationDividerComponent,
  DocumentationHeaderComponent,
  DocumentationSectionComponent,
  FakeCodeComponent,
  InputCardComponent,
  InputInfo,
  PaletteComponent,
} from '../../../components';

@Component({
  selector: 'app-message-bubble-documentation',
  standalone: true,
  imports: [
    CommonModule,
    FakeCodeComponent,
    InputCardComponent,
    PaletteComponent,
    DocumentationHeaderComponent,
    DocumentationSectionComponent,
    DocumentationDividerComponent,
    ConsiderationComponent,
  ],
  template: `
    <div class="flex flex-col gap-2 px-4">

      <app-documentation-header
        title="Message Bubble"
        tag="<nyhcr-message-bubble />"
        type="Styled Content Component"
        description="Renders a message bubble to the screen, this is the principle renderer for message content."
      />

      <app-documentation-divider />

      <app-documentation-section title="Inputs">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <app-input-card *ngFor="let input of this.inputs" [input]="input" />
        </div>
      </app-documentation-section>

      <app-documentation-divider />

      <app-documentation-section title="Considerations">
        <app-consideration
          title="Message Type"
          description="Message Type will default to SENT when not explicitly set. You can set the value using the options input."
        />
        <app-consideration
          title="Background Color"
          description="Unless specified the colors of the message bubble will be set automatically depending on the message type."
        >
          <div class="self-center grid grid-cols-2 gap-4 mt-2">
            <app-palette *ngFor="let color of this.colors"
              [content]="this.color.content"
              [color]="this.color.val"
              textColor="hsla(24, 10%, 10%, .95)"
              borderStyle="solid"
              borderWidth="1px"
              borderColor="hsla(24, 10%, 10%, .2)"
            />
          </div>
        </app-consideration>
      </app-documentation-section>

    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageBubbleDocumentationComponent {
  readonly inputs: InputInfo[] = [
    {
      input: 'message',
      type: 'Message',
      required: true,
      description:
        'The message itself, contains information relating to the message like the content, message owner and other meta data.',
    },
    {
      input: 'options',
      type: 'MessageBubbleOptions',
      required: false,
      description:
        'An object that allows for finer control of a message bubble.',
    },
    {
      input: 'timestampOptions',
      type: 'MessageTimestampOptions',
      required: false,
      description:
        'An object that allows for finer control of timestamp appearance.',
    },
  ];

  readonly colors = [
    { val: 'hsla(269, 100%, 92%, 1)', content: 'SENT' },
    { val: 'hsla(0, 0%, 100%, 1)', content: 'RECEIVED' },
  ];
}
