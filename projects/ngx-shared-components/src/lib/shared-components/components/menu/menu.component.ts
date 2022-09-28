import { Component, Input, OnInit } from '@angular/core';
import { IMenuConfig } from './helpers/menu-config';

@Component({
  selector: 'lib-menu',
  template: `
    <div
      class="menu-backdrop"
      *ngIf="this.dropdownOpen"
      (click)="this.dropdownOpen = false"
    ></div>
    <div class="menu-container">
      <lib-menu-button
        (onClick)="this.dropdownOpen = !this.dropdownOpen"
      ></lib-menu-button>
      <lib-menu-dropdown
        *ngIf="this.dropdownOpen"
        (onBackdropClick)="this.dropdownOpen = false"
        [menuPosition]="this.menuPosition"
      >
        <ng-content></ng-content>
      </lib-menu-dropdown>
    </div>
  `,
  styles: [
    `
      .menu-container {
        position: relative;
      }
    `,
    `
      .menu-backdrop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        min-width: 100vw;
        min-height: 100vw;
        background: hsla(0, 0%, 0%, 0.125);
        z-index: 300;
      }
    `,
  ],
})
export class MenuComponent implements OnInit {
  @Input() menuStyleConfig?: IMenuConfig;
  dropdownOpen = false;

  @Input() menuPosition:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right' = 'bottom-left';

  constructor() {}

  ngOnInit(): void {}
}
