import { Component, Input, OnInit } from '@angular/core';
import { IBaseStyleOverride } from '../../utilities';
import { getUpdateProps, IToolbarConfig } from './helpers';



@Component({
  selector: 'lib-toolbar-base',
  template: `
    <div class="toolbar-container" [ngClass]="this.containerClasses">
      <lib-toolbar-internal
        [classes]="this.toolbarConfig.classes ?? {}"
        [libApplyCssProps]="this.resolvedProps"
      >
        <ng-content></ng-content>
      </lib-toolbar-internal>
    </div>
  `,
  styles: [
    `
      .toolbar-container {
        container-type: inline-size;
        container-name: toolbar-container;
        height: 100%;
        width: 100%;
      }
    `,
  ],
})
export class ToolbarBaseComponent implements OnInit {
  private readonly defaultStyles: IBaseStyleOverride = {

    width: 'auto',
    height: 'auto',

    padding: '.25rem',
    margin: '0',

    background: 'inherit',
    color: 'inherit',

    border: 'none',
    borderRadius: '0',

    boxShadow: '5px 0px 10px rgb(0 0 0 .5)',

  };

  @Input() containerClasses?: { [key: string]: boolean } = {};

  @Input() toolbarConfig: Partial<IToolbarConfig> = {
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
   * uses the buildUpdateProps function to build the record
   *
   */
  get resolvedProps(): Record<string, string> {

    return getUpdateProps(this.toolbarConfig);
  }
}
