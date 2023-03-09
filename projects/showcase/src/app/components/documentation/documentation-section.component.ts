import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-documentation-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col gap-2 py-2">
      <h2 class="text-xl text-stone-700 font-semibold">{{this.title}}</h2>
      <ng-content />
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentationSectionComponent {

  @Input() title!: string;

}
