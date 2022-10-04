import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'lib-common-menu',
  template: `
    <lib-menu
      [menuPosition]="this.menuPosition"
      [dropdownOpen]="this.menuOpened"
      (dropdown)="this.menuOpened = $event"
    >
      <lib-menu-item *ngFor="let item of this.allMenuItems; last as isLast">
        <div
          class="menu-content"
          [ngClass]="{ action: item.isAction }"
          (click)="this.onMenuItemClicked(item.actionId)"
        >
          <ng-icon class="icon" [name]="item.icon"></ng-icon>
          <div class="text">{{ item.text }}</div>
        </div>
        <hr *ngIf="!isLast" class="menu-divider" />
      </lib-menu-item>
    </lib-menu>
  `,
  styles: [
    `
      .menu-content {
        display: flex;
        flex-shrink: 1;
        flex-direction: row;
        align-items: center;
        gap: 1.5rem;
        padding: 1rem 1.5rem;
      }

      .menu-content.action:hover,
      .menu-content.action:focus {
        background: hsla(0, 0%, 0%, 0.1);
        cusor: pointer;
      }
    `,
    `
      .spacer {
        flex: 1;
      }
    `,
    `
      .menu-content .icon {
        margin-left: 1.5rem;
        padding: 0.5rem 0;
        justify-self: flex-start;
      }
    `,
    `
      .menu-content .text {
        justify-self: center;
        margin-right: 1.5rem;
      }
    `,
    `
      .menu-divider {
        margin: 0 1rem;
        height: 1px;
        border: none;
        color: hsla(0, 0%, 0%, 0.3);
        background-color: hsla(0, 0%, 0%, 0.3);
      }
    `,
  ],
})
export class CommonMenuComponent implements OnInit {
  @Input() menuPosition:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right' = 'bottom-right';

  @Input() isLoggedIn: boolean = false;
  @Input() hasAdminPrivileges = false;

  @Input() optionOverride?: {
    hideAuthOptions?: boolean;
    hideSettingsOption?: boolean;
    hideAdminOption?: boolean;
  };

  @Input() additionalMenuItems: {
    text: string;
    icon: string;
    actionId: string;
    isAction: boolean;
  }[] = [];

  @Output() menuItemClicked: EventEmitter<string> = new EventEmitter<string>();

  menuOpened: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  get allMenuItems() {
    return [
      ...this.additionalMenuItems,
      ...(this.optionOverride?.hideAuthOptions
        ? []
        : [
            {
              text: this.isLoggedIn ? 'Logout' : 'Login',
              icon: this.isLoggedIn ? 'heroLockClosed' : 'heroLockOpen',
              actionId: this.isLoggedIn ? 'logout' : 'login',
              isAction: true,
            },
          ]),
      ...(this.optionOverride?.hideSettingsOption
        ? []
        : [
            {
              text: 'Settings',
              icon: 'heroCog6Tooth',
              actionId: 'settings',
              isAction: true,
            },
          ]),
    ];
  }

  onMenuItemClicked(actionId: string) {
    this.menuItemClicked.emit(actionId);
    this.menuOpened = false;
  }
}
