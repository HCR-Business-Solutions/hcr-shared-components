import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'lib-toolbar-internal',
  template: `
    <div class="toolbar" [ngClass]="this.classes">
      <ng-content>

      </ng-content>
    </div>
  `,
  styles: [
    `
      :host {
      --toolbar--width: auto;
        --toolbar--height: auto;
        --toolbar--padding: 0;
        --toolbar--margin: 0;
        --toolbar--background: inherit;
        --toolbar--color: inherit;
        --toolbar--border: none;
        --toolbar--border-radius: 0px;
        --toolbar--box-shadow: none;
      }
    `,
    `
      .toolbar {
        width: var(--toolbar--width);
        height: var(--toolbar--height);
        padding: var(--toolbar--padding);
        margin: var(--toolbar--margin);
        background: var(--toolbar--background);
        color: var(--toolbar--color);
        border: var(--toolbar--border);
        border-radius: var(--toolbar--border-radius);
        box-shadow: var(--toolbar--box-shadow);
      }
    `,
  ],
})
export class ToolbarInternalComponent implements OnInit {
  @Input() classes: { [key: string]: boolean } = {};

  constructor() {}

  ngOnInit(): void {}
}
