import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeCodeComponent } from '../../../components';
import { InputInfo } from '../../../components/input-card.component';

@Component({
  selector: 'app-message-bubble-documentation',
  standalone: true,
  imports: [CommonModule, FakeCodeComponent],
  template: `
    <div class="flex flex-col gap-2 px-4 pt-4">
      <h1 class="text-2xl text-stone-900">Message Bubble</h1>
      <app-fake-code content="<nyhcr-message-bubble />"/>
      <p>
        The Message Bubble Component is a <strong class="font-semibold italic">Styled Content Component</strong> which renders a Message Bubble to the screen.<br/>
      </p>
      <hr class="mx-6 md:mx-12 lg:mx-20 xl:mx-28"/>
      <div class="flex flex-col gap-2">
        <h2 class="text-xl text-stone-800">Inputs</h2>
        <p>
          A message bubble has <b>3</b> inputs, one of which is required while the other two are optional.<br/>
        </p>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageBubbleDocumentationComponent {
  inputs: InputInfo[] = [
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
}
