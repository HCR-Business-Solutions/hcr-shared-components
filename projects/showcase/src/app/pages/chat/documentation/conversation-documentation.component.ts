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
  selector: 'app-conversation-documentation',
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
      title="Conversation"
      tag="<nyhcr-conversation />"
      type="Logical Component"
      description="Renders a conversation to the screen, this component handles dividing messages into message groups based on their sender and rendering each as a message group."
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
        title="Message Determination"
        description="Messages will automatically determine if they are Sent or Received based on the currentUser input."
      />
      <app-consideration
        title="Grouping"
        description="Messages will automatically group themselves based on sender"
      />
      <app-consideration
        title="Meta Information"
        description="Messages will determine what meta information need to be shown based off of where they appear in context"
      />
    </app-documentation-section>

    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConversationDocumentationComponent {
  readonly inputs: InputInfo[] = [
    {
      input: 'messages',
      type: 'Message[]',
      required: true,
      description:
        'A list of messages, note that all messages should be from a single owner',
    },
    {
      input: 'currentUser',
      type: 'MessageUser',
      required: true,
      description:
        'The MessageUser information of the CURRENT user, this will be used to determine Message Types.',
    },
    {
      input: 'options',
      type: 'ConverationOptions',
      required: false,
      description: 'Allows for finer control of Sub Components',
    },
  ];
}
