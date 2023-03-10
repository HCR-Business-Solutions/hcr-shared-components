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
} from '../../../components';

@Component({
  selector: 'app-message-documentation',
  standalone: true,
  imports: [
    CommonModule,
    InputCardComponent,
    DocumentationHeaderComponent,
    DocumentationSectionComponent,
    DocumentationDividerComponent,
    ConsiderationComponent,
  ],
  template: `
  <div class="flex flex-col gap-2 px-4">

    <app-documentation-header
      title="Message"
      tag="<nyhcr-message />"
      type="Styled Layout Component"
      description="Renders a message to the screen, this component predominately controls the layout of a single message."
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
        title="Message Alignment"
        description="When Message type is SENT the message will be alligned to the right of the container, and when RECEIVED the message will be aligned to the left."
      />
      <app-consideration
        title="Avatar"
        description="Avatars are optionally rendered based on the showAvatar option. Avatars will be rendered on the 'side' the message is aligned to, 32px + 0.25rem space is allocated for avatars. If you would like to have this space without an avatar you can use the offsetAvatar property in the options."
      />
      <app-consideration
        title="Message Grouping"
        description="Grouping describes how messages will be rounded, this is to create a more conitinuous feel. The default value is NONE but can be overridden in the options."
      />
      <app-consideration
        title="Deep Options"
        description="In addition to options for the message itself, you can also access options for all deeper components (message bubble & timestamp), you can set these using the message option object."
      />
    </app-documentation-section>

    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageDocumentationComponent {
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
      type: 'MessageOptions',
      required: false,
      description: 'Allows for finer control of the Message Component.',
    },
  ];
}
