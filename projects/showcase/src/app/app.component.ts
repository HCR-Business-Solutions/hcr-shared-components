import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageComponent } from 'projects/shared-components-lib/src/lib';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex flex-col">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
  standalone: true,
  imports: [RouterModule, MessageComponent],
})
export class AppComponent {
  title = 'showcase';
}
