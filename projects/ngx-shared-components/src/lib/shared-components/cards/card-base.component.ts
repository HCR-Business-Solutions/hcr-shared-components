import { Component, Input, OnInit } from '@angular/core';
import { CardConfig } from './helpers/card-config';
import { CardStyles, buildUpdateProps } from './helpers/card-styles';

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
  private readonly defaultStyles: CardStyles = {
    backgroundColor: 'inherit',
    borderColor: 'hsla(0, 0%, 0%, 0.125)',
    borderRadius: '0.25rem',
    borderWidth: '1px',
    borderStyle: 'solid',
    boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
    padding: '1rem',
    margin: '0',
    textColor: 'inherit',
  };

  @Input() containerClasses?: { [key: string]: boolean } = {};

  @Input() cardConfig: Partial<CardConfig> = {
    styles: this.defaultStyles,
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
   * uses the buildUpdateProps function to build the record
   *
   */
  get resolvedProps(): Record<string, string> {
    return buildUpdateProps(this.cardConfig.styles ?? this.defaultStyles);
  }
}
