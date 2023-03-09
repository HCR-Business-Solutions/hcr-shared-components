import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
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
  ],
  template: `
    <div class="flex flex-col gap-2 px-4">
      <h1 class="text-2xl text-stone-900">Message Bubble</h1>
      <app-fake-code content="<nyhcr-message-bubble />"/>
      <p>
        The Message Bubble Component is a <strong class="font-semibold italic">Styled Content Component</strong> which renders a Message Bubble to the screen.<br/>
      </p>
      <hr class="mx-6 md:mx-12 lg:mx-20 xl:mx-28"/>
      <div class="flex flex-col gap-2 py-2">
        <h2 class="text-xl text-stone-700">Inputs</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <app-input-card *ngFor="let input of this.inputs" [input]="input" />
        </div>
      </div>
      <hr class="mx-6 md:mx-12 lg:mx-20 xl:mx-28"/>
      <div class="flex flex-col gap-2 py-2">
        <h2 class="text-xl text-stone-700">Considerations</h2>
        <p>
          A message bubble will automatically classify itself as a "SENT" message, to set it as a recieved message you must set messageType to "RECEIVED" in the options object.
        </p>
        <div class="flex flex-col mt-4">
          <p>When a background color is not set one of two profiles will be chosen based on the message type.</p>
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
        </div>
      </div>
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
