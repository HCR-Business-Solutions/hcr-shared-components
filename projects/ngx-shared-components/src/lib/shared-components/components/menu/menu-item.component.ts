import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-menu-item',
  template: `
    <div class="menu-item">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      :host {
        /* define default variables for IBaseStyleOverride */
        --menu-item--width: 100%;
        --menu-item--height: 100%;
        --menu-item--padding: 0;
        --menu-item--margin: 0;
        --menu-item--background: transparent;
        --menu-item--color: hsla(0, 0%, 0%, 1);
        --menu-item--border: none;
        --menu-item--border-radius: 0;
        --menu-item--box-shadow: none;

        /* define interact variables for IBaseStyleOverride.  used for :hover and :focus */
        --menu-item--interact--width: 100%;
        --menu-item--interact--height: 100%;
        --menu-item--interact--padding: 0;
        --menu-item--interact--margin: 0;
        --menu-item--interact--background: transparent;
        --menu-item--interact--color: hsla(0, 0%, 0%, 1);
        --menu-item--interact--border: none;
        --menu-item--interact--border-radius: 0;
        --menu-item--interact--box-shadow: none;
      }
    `,
    `
      .menu-item {
        /* use default variables defined in :host */
        width: var(--menu-item--width);
        height: var(--menu-item--height);
        padding: var(--menu-item--padding);
        margin: var(--menu-item--margin);
        background: var(--menu-item--background);
        color: var(--menu-item--color);
        border: var(--menu-item--border);
        border-radius: var(--menu-item--border-radius);
        box-shadow: var(--menu-item--box-shadow);
        cursor: pointer;
      }
    `,
    `
      .menu-item:hover,
      .menu-item:focus {
        /* use interact variables defined in :host */
        width: var(--menu-item--interact--width);
        height: var(--menu-item--interact--height);
        padding: var(--menu-item--interact--padding);
        margin: var(--menu-item--interact--margin);
        background: var(--menu-item--interact--background);
        color: var(--menu-item--interact--color);
        border: var(--menu-item--interact--border);
        border-radius: var(--menu-item--interact--border-radius);
        box-shadow: var(--menu-item--interact--box-shadow);
      }
    `,
  ],
})
export class MenuItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
