import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <lib-card-alert type="success">
      <h1 class="card-title">Success</h1>
    </lib-card-alert>
  `,
  styles: [],
})
export class AppComponent {
  title = 'shared-components-web';
}
