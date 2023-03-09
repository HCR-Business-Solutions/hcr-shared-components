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
      class="bg-stone-50 border border-stone-900 border-opacity-20 rounded-md overflow-hidden h-full w-full"
    >
      <div
        class="p-4 text-stone-900 font-semibold bg-stone-100 border-b border-stone-900  border-opacity-20 w-full"
      >
        <span class="text-stone-700 font-normal italic"
          >@Input {{ this.input.required ? '@Required' : '@Optional' }}</span
        >
        {{ this.input.input }}
      </div>
      <div
        class="bg-white m-4 flex items-center justify-center border border-stone-900 border-opacity-30 rounded-md"
      >
        <button class="h-full w-full py-4 flex flex-col items-center justify-center" [disabled]="!this.input.typelink">
          <div class="text-sm text-stone-700">Type</div>
          <div class="text-xl">{{ this.input.type }}</div>
        </button>
      </div>
      <div class="p-4">
        {{ this.input.description }}
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputCardComponent {
  @Input() input!: InputInfo;
}
