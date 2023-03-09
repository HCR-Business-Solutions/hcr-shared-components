import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fake-code',
  standalone: true,
  imports: [CommonModule],
  template: `
    <code
      [ngClass]="{
        'font-mono text-sm h-fit w-fit p-2 bg-stone-50 text-stone-600 border-stone-700 border border-opacity-5':
          !this.preFormat
      }"
    >
      <ng-container *ngIf="this.preFormat; else noPre">
        <pre
          class="font-mono text-sm h-fit w-fit p-2 bg-stone-50 text-stone-600 border-stone-700 border border-opacity-5"
          >{{ content }}</pre
        >
      </ng-container>

      <ng-template #noPre>
        {{ content }}
      </ng-template>
    </code>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FakeCodeComponent {
  @Input() content!: string;
  @Input() preFormat: boolean = false;
}
