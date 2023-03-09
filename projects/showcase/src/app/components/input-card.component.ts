import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface InputInfo {
  input: string;
  type: string;
  required: boolean;
  typelink?: string;
  description: string;
}

@Component({
  selector: 'app-input-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="bg-stone-50 border border-stone-900 border-opacity-20 rounded-md overflow-hidden"
    >
      <div class="bg-stone-100 border-b border stone-900 border-opacity-20">
        @Input {{ this.input.required ? '@Required' : '@Optional' }}
        {{ this.input.input }}
      </div>
      <div></div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputCardComponent {
  @Input() input!: InputInfo;
}
