import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMenuConfig } from './helpers/menu-config';

@Component({
  selector: 'lib-menu',
  template: `
    <div
      class="menu-backdrop"
      *ngIf="this.dropdownOpen"
      (click)="this.handleDropdownChange(false)"
    ></div>
    <div class="menu-container">
      <lib-menu-button
        (onClick)="this.handleDropdownChange()"
      ></lib-menu-button>
      <lib-menu-dropdown
        *ngIf="this.dropdownOpen"
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
  @Input() dropdownOpen = false;
  @Output() dropdown: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() menuPosition:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right' = 'bottom-left';

  constructor() {}

  ngOnInit(): void {}

  handleDropdownChange(next?: boolean): void {
    if (next === undefined) {
      next = !this.dropdownOpen;
    }

    this.dropdownOpen = next;
    this.dropdown.emit(next);
  }
}
