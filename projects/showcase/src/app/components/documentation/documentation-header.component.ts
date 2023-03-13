import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeCodeComponent } from '../fake-code.component';

@Component({
  selector: 'app-documentation-header',
  standalone: true,
  imports: [CommonModule, FakeCodeComponent],
  template: `
  <div class="flex flex-col gap-2 my-4">
    <div class="flex flex-row gap-2 items-center">
      <h1 class="text-2xl text-stone-900">{{this.title}}</h1>
      <span class="mt-1" *ngIf="this.type">-</span>
      <span class="mt-1 text-stone-600 italic" *ngIf="this.type">{{this.type}}</span>
    </div>
    <app-fake-code *ngIf="this.tag" [content]="this.tag"/>
    <p>
      {{this.description}}
    </p>
  </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentationHeaderComponent {
  @Input() title!: string;
  @Input() tag?: string;
  @Input() type?: string;
  @Input() description!: string;
}
