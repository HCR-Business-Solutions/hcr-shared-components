import { Component, Input, OnInit } from '@angular/core';
import { CardConfig } from './helpers/card-config';

@Component({
  selector: 'lib-card-internal',
  template: `
    <div class="card" [ngClass]="this.classes">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      :host {
        --card-background-color: inherit;
        --card-border-color: hsla(0, 0%, 0%, 0.125);
        --card-border-radius: 0;
        --card-border-width: 1px;
        --card-boder-style: solid;
        --card-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        --card-padding: 0;
        --card-margin: 0;
        --card-text-color: inherit;
      }
    `,
    `
      .card {
        background-color: var(--card-background-color);
        border-color: var(--card-border-color);
        border-radius: var(--card-border-radius);
        border-style: var(--card-boder-style);
        border-width: var(--card-border-width);
        box-shadow: var(--card-box-shadow);
        color: var(--card-text-color);
        padding: var(--card-padding);
        margin: var(--card-margin);
      }
    `,
  ],
})
export class CardInternalComponent implements OnInit {
  @Input() classes: { [key: string]: boolean } = {};

  constructor() {}

  ngOnInit(): void {}
}
