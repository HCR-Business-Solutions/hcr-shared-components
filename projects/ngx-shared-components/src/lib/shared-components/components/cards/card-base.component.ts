import { Component, Input, OnInit } from '@angular/core';
import { IBaseStyleOverride } from '../../utilities';
import { getUpdateProps, ICardConfig } from './helpers/card-config';

@Component({
  selector: 'lib-card-base',
  template: `
    <div class="card-container" [ngClass]="this.containerClasses">
      <lib-card-internal
        [classes]="this.cardConfig.classes ?? {}"
        [libApplyCssProps]="this.resolvedProps"
      >
        <ng-content></ng-content>
      </lib-card-internal>
    </div>
  `,
  styles: [
    `
      .card-container {
        container-type: inline-size;
        container-name: card-container;
        height: 100%;
        width: 100%;
      }
    `,
  ],
})
export class CardBaseComponent implements OnInit {
  private readonly defaultStyles: IBaseStyleOverride = {

    width: 'auto',
    height: 'auto',

    padding: '.25rem',
    margin: '0',

    background: 'inherit',
    color: 'inherit',

    border: '1px solid hsla(0, 0%, 0%, .6)',
    borderRadius: '0.25rem',

    boxShadow: '2px 0 5px hsla(0, 0%, 0%, .125)',

  };

  @Input() containerClasses?: { [key: string]: boolean } = {};

  @Input() cardConfig: Partial<ICardConfig> = {
    styles: {default: this.defaultStyles},
  };

  constructor() {}

  ngOnInit(): void {}

  /**
   * getter: resolvedProps
   *
   * @returns Record<string, string>
   *
   * @description takes the styles from the cardConfig and returns a record of css properties
   * if no styles are provided for a given property, the default styles are used
   * uses the getUpdateProps function to build the record
   *
   */
  get resolvedProps(): Record<string, string> {
    return getUpdateProps(this.cardConfig);
  }
}
