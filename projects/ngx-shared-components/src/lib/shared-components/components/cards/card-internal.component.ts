import { Component, Input, OnInit } from '@angular/core';



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
        --card--width: auto;
        --card--height: auto;
        --card--padding: 0;
        --card--margin: 0;
        --card--background: inherit;
        --card--color: inherit;
        --card--border: none;
        --card--border-radius: 0px;
        --card--box-shadow: none;
      }
    `,
    `
      .card {
        width: var(--card--width);
        height: var(--card--height);
        padding: var(--card--padding);
        margin: var(--card--margin);
        background: var(--card--background);
        color: var(--card--color);
        border: var(--card--border);
        border-radius: var(--card--border-radius);
        box-shadow: var(--card--box-shadow);
      }
    `,
  ],
})
export class CardInternalComponent implements OnInit {
  @Input() classes: { [key: string]: boolean } = {};

  constructor() {}

  ngOnInit(): void {}
}
