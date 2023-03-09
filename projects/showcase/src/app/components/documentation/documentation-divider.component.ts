import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-documentation-divider',
  standalone: true,
  imports: [CommonModule],
  template: ` <hr class="mx-6 md:mx-12 lg:mx-20 xl:mx-28" /> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentationDividerComponent {}
