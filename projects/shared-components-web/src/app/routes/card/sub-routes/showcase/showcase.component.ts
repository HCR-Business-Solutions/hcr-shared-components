import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="card-showcase">
      <lib-card-base>
        <h1>Base Card</h1>
      </lib-card-base>
      <lib-card-alert type="success">
        <h1 class="card-title">Success Alert</h1>
      </lib-card-alert>
      <lib-card-alert type="info">
        <h1 class="card-title">Info Alert</h1>
      </lib-card-alert>
      <lib-card-alert type="warning">
        <h1 class="card-title">Warning Alert</h1>
      </lib-card-alert>
      <lib-card-alert type="danger">
        <h1 class="card-title">Danger Alert</h1>
      </lib-card-alert>
      <lib-card-alert type="question">
        <h1 class="card-title">Question Alert</h1>
      </lib-card-alert>
    </div>
  `,
  styles: [
    `
      .card-showcase {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
      }
    `,
    `
      .card-showcase > * {
        width: 75%;
      }
    `,
  ],
})
export class ShowcaseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
