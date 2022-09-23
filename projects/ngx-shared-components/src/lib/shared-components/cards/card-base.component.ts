import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-card-base',
  template: `
    <div class="card-container" [ngClass]="this.containerClasses">
      <div class="card" [ngClass]="this.cardClasses">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        --card-background-color: inherit;
        --card-border-color: hsla(0, 0%, 0%, 0.125);
        --card-border-radius: 0.25rem;
        --card-border-width: 1px;
        --card-boder-style: solid;
        --card-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        --card-padding: 1rem;
        --card-text-color: inherit;
      }
    `,
    `
      .card-container {
        container-type: inline-size;
        container-name: card-container;
        height: 100%;
        width: 100%;
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
      }
    `,
  ],
})
export class CardBaseComponent implements OnInit {
  @Input() containerClasses?: { [key: string]: boolean } = {};
  @Input() cardClasses?: { [key: string]: boolean } = {};

  constructor() {}

  ngOnInit(): void {}
}
