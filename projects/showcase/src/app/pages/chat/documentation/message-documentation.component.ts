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
      description="Renders a message to the screen, this component controls minor layout doing with a message"
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
      description: 'Allows for finer control of the Message Component.'
    }
  ]

}
