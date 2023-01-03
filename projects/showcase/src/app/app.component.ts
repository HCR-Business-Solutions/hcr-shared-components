import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex flex-col">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
  standalone: true,
  imports: [RouterModule],
})
export class AppComponent {
  title = 'showcase';
}
