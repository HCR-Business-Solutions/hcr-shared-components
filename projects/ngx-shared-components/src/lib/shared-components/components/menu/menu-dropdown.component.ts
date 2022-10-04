import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-menu-dropdown',
  template: `
    <div
      class="menu-dropdown"
      [ngClass]="{
        'top-right': this.menuPosition === 'top-right',
        'top-left': this.menuPosition === 'top-left',
        'bottom-right': this.menuPosition === 'bottom-right',
        'bottom-left': this.menuPosition === 'bottom-left'
      }"
    >
      <div class="menu-dropdown-items">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        /* define default variables for IBaseStyleOverride */
        --menu-dropdown--width: auto;
        --menu-dropdown--height: auto;
        --menu-dropdown--padding: 0;
        --menu-dropdown--margin: 0;
        --menu-dropdown--background: hsla(0, 0%, 100%, 1);
        --menu-dropdown--color: hsla(0, 0%, 0%, 1);
        --menu-dropdown--border: 1px solid hsla(0, 0%, 0%, 0.25);
        --menu-dropdown--border-radius: 0.5rem;
        --menu-dropdown--box-shadow: 0 0.5rem 1rem hsla(0, 0%, 0%, 0.1);
      }
    `,
    `
      .menu-dropdown {
        position: absolute;
        z-index: 400;
        /* use default variables defined in :host */
        width: var(--menu-dropdown--width);
        height: var(--menu-dropdown--height);
        padding: var(--menu-dropdown--padding);
        margin: var(--menu-dropdown--margin);
        background: var(--menu-dropdown--background);
        color: var(--menu-dropdown--color);
        border: var(--menu-dropdown--border);
        border-radius: var(--menu-dropdown--border-radius);
        box-shadow: var(--menu-dropdown--box-shadow);
        overflow: hidden;
        display: block;
      }
    `,
    `
      .menu-dropdown.top-right {
        top: 0;
        right: calc(0px + 20%);
      }
    `,
    `
      .menu-dropdown.top-left {
        top: 0;
        left: calc(0px + 20%);
      }
    `,
    `
      .menu-dropdown.bottom-right {
        top: calc(100%);
        right: calc(0px + 20%);
      }
    `,
    `
      .menu-dropdown.bottom-left {
        top: calc(100%);
        left: calc(0px + 20%);
      }
    `,
    `
      /* define a flex col area that takes up as much space as possible tells children to be max width */
      .menu-dropdown-items {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        overflow: hidden;
        white-space: nowrap;
      }
    `,
  ],
})
export class MenuDropdownComponent implements OnInit {
  @Input() menuPosition:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right' = 'bottom-left';

  constructor() {}

  ngOnInit(): void {}
}
