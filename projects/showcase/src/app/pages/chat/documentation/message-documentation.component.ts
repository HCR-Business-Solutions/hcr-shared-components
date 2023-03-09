import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeCodeComponent } from '../../../components';

@Component({
  selector: 'app-message-documentation',
  standalone: true,
  imports: [CommonModule, FakeCodeComponent],
  template: `
    <div class="flex flex-col gap-2">
      <h2 class="text-2xl text-stone-900">Message Component</h2>
      <p>
        <app-fake-code content="<nyhcr-message />"></app-fake-code>
      </p>
      <p>
        The message component is the lowest data package component provided by
        the chat component area.<br />
        This component takes a message object, an optional options object and
        displays a message using several styled components.
      </p>
      <hr />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          class="flex flex-col border border-stone-900 border-opacity-40 rounded-sm bg-stone-50 p-4"
        >
          <h3 class="text-xl text-stone-700">Message Object</h3>
        </div>
        <div
          class="flex flex-col border border-stone-900 border-opacity-40 rounded-sm bg-stone-50 p-4"
        >
          <h3 class="text-xl text-stone-700">Options Object</h3>
        </div>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageDocumentationComponent {}
