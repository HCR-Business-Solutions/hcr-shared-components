import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ConsiderationComponent,
  DocumentationDividerComponent,
  DocumentationHeaderComponent,
  DocumentationSectionComponent,
  InputCardComponent,
  InputInfo,
} from '../../../components';

@Component({
  selector: 'app-message-group-documentation',
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
      title="Message Group"
      tag="<nyhcr-message-group />"
      type="Styled Layout Component"
      description="Renders a message group to the screen, this component predominately controls the layout of a multiple messages from a single sender."
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
        description="Message Type will default to SENT when not explicitly set. You can set the value using the options input. Note that all messages should be the same type."
      />
      <app-consideration
        title="Avatar and Offset"
        description="When not set, a Received message group will attempt to render an avatar unless declared otherwise in options. The first message in the group will render with an avatar while any subsequent messages will have an offset. This is ignored if no data for an avatar is provided."
      />
      <app-consideration
        title="Message Sender"
        description="This component is intended to group messages from the same sender. Messages from different senders should not be part of the same group."
      />
      <app-consideration
        title="Grouping"
        description="Messages will automatically be given appropriate rounding based on where in the group they are assigned, you can override this using the bubble options in the options object."
      />
    </app-documentation-section>

    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageGroupDocumentationComponent {
  readonly inputs: InputInfo[] = [
    {
      input: 'messages',
      type: 'Message[]',
      required: true,
      description:
        'A list of messages, note that all messages should be from a single owner',
    },
    {
      input: 'options',
      type: 'MessageGroupOptions',
      required: false,
      description: 'Allows for finer control of the Message Group Component.',
    },
  ];
}
