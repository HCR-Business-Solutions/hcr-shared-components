import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'lib-menu-button',
  template: `
    <button
      class="menu-button"
      (click)="this.onClick.emit($event)"
      aria-label="menu button"
    >
      <ng-icon [size]="this.iconSize" name="heroBars3"></ng-icon>
    </button>
  `,
  styles: [
    `
      :host {
        /* define default variables for IBaseStyleOverride */
        --menu-button--width: auto;
        --menu-button--height: auto;
        --menu-button--padding: 0.5rem;
        --menu-button--margin: 0;
        --menu-button--background: transparent;
        --menu-button--color: hsla(0, 0%, 0%, 1);
        --menu-button--border: none;
        --menu-button--border-radius: 100vw;
        --menu-button--box-shadow: none;

        /* define interact variables for IBaseStyleOverride.  used for :hover and :focus */
        --menu-button--interact--width: auto;
        --menu-button--interact--height: auto;
        --menu-button--interact--padding: 0.5rem;
        --menu-button--interact--margin: 0;
        --menu-button--interact--background: transparent;
        --menu-button--interact--color: hsla(0, 0%, 0%, 1);
        --menu-button--interact--border: none;
        --menu-button--interact--border-radius: 100vw;
        --menu-button--interact--box-shadow: none;
      }
    `,
    `
      .menu-button {
        /* use default variables defined in :host */
        width: var(--menu-button--width);
        height: var(--menu-button--height);
        padding: var(--menu-button--padding);
        margin: var(--menu-button--margin);
        background: var(--menu-button--background);
        color: var(--menu-button--color);
        border: var(--menu-button--border);
        border-radius: var(--menu-button--border-radius);
        box-shadow: var(--menu-button--box-shadow);
        cursor: pointer;
      }
    `,
    `
      .menu-button:hover,
      .menu-button:focus {
        /* use interact variables defined in :host */
        width: var(--menu-button--interact--width);
        height: var(--menu-button--interact--height);
        padding: var(--menu-button--interact--padding);
        margin: var(--menu-button--interact--margin);
        background: var(--menu-button--interact--background);
        color: var(--menu-button--interact--color);
        border: var(--menu-button--interact--border);
        border-radius: var(--menu-button--interact--border-radius);
        box-shadow: var(--menu-button--interact--box-shadow);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuButtonComponent implements OnInit {
  @Input() iconSize: string = '1.75rem';

  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnInit(): void {}
}
