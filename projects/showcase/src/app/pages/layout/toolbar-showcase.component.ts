import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from 'projects/shared-components-lib/src/public-api';

@Component({
  standalone: true,
  imports: [CommonModule, ToolbarComponent],
  template: `
    <div class="w-screen flex flex-col gap-6">
      <div class="w-full h-12">
        <nyhcr-toolbar>
          <div brand class="text-white">brand</div>
          <div menu class="text-white">menu</div>
        </nyhcr-toolbar>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarShowcaseComponent {}
