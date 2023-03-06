import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fake-code',
  standalone: true,
  imports: [CommonModule],
  template: `
    <code>
      <pre
        class="font-mono text-sm h-fit w-fit p-2 bg-stone-50 text-stone-600 border-stone-700 border border-opacity-5"
        >{{ content }}</pre
      >
    </code>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FakeCodeComponent {
  @Input() content!: string;
}
