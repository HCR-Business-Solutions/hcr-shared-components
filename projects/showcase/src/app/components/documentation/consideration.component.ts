import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationDividerComponent } from './documentation-divider.component';

@Component({
  selector: 'app-consideration',
  standalone: true,
  imports: [CommonModule, DocumentationDividerComponent],
  template: `
    <div class="flex flex-col p-4 gap-2 bg-white border border-stone-900 border-opacity-30 rounded-md">
      <div class="py-2 text-stone-900 font-semibold">{{this.title}}</div>
      <app-documentation-divider/>
      <div class="text-stone-700 font-medium">{{this.description}}</div>
      <ng-content />
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsiderationComponent {
  @Input() title!: string;
  @Input() description!: string;
}
