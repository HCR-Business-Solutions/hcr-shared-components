import { Component, Input, OnInit } from '@angular/core';
import { CardBaseComponent } from './card-base.component';

import * as ColorHelpers from '../utilities/color';

@Component({
  template: `
    <lib-card-base
      [containerClasses]="this.containerClasses"
      [cardClasses]="this.cardClasses"
      [libApplyCssProps]="this.alertProps"
    >
      <!-- Display the icon using content projection selector alertIcon -->
      <div class="alert-icon">
        <!-- <ng-content select="[alertIcon]"></ng-content> -->
      </div>
      <!-- Display the message using content projection selector alertMessage -->
      <div class="alert-message">
        <ng-content></ng-content>
      </div>
    </lib-card-base>
  `,
  styles: [],
  selector: 'lib-card-alert',
})
export class CardAlertComponent implements OnInit {
  @Input() type: 'success' | 'info' | 'warning' | 'danger' = 'success';
  @Input() containerClasses?: { [key: string]: boolean } = {};
  @Input() cardClasses?: { [key: string]: boolean } = {};

  @Input() customBackgroundColors?: {
    success?: string;
    info?: string;
    warning?: string;
    danger?: string;
  };

  @Input() skipSimilarColor: boolean = false;

  // Private Readonly Default Background Color Map For Each Alert Type As HSLA
  private readonly backgroundColorMap: { [key: string]: string } = {
    success: 'hsla(120, 100%, 90%, .5)',
    info: 'hsla(210, 100%, 90%, .5)',
    warning: 'hsla(60, 100%, 90%, .5)',
    danger: 'hsla(0, 100%, 90%, .5)',
  };

  constructor() {}

  ngOnInit(): void {}

  get backgroundColor(): string {
    return (
      this.customBackgroundColors?.[this.type] ??
      this.backgroundColorMap[this.type]
    );
  }

  // Public Getter Alert Props As Record<string, string>
  public get alertProps(): Record<string, string> {
    return {
      '--card-background-color': this.backgroundColor,
      '--card-border-color': this.borderColor(),
      '--card-text-color': this.textColor(),
    };
  }

  /**
   * getter: borderColor
   *
   * use the type and the backgroundColorMap to get the border color
   * the border color should be darkened using the ColorHelpers.darkenColor function
   * handle the case where darkenColor returns null
   *
   */
  public borderColor(): string {
    const color = this.backgroundColor;
    const darkenedColor = ColorHelpers.darken(color, 0.8);
    return darkenedColor ?? color;
  }

  /**
   * getter: textColor
   *
   * use the type and the backgroundColorMap to get the text color
   * the text color should be made accesible using the getAccessibleColor function
   * handle the case where getAccessibleColor returns null
   * if getAccessibleColor returns null, if the color is light, use black, otherwise use white
   *
   */
  public textColor(): string {
    const color = this.backgroundColorMap[this.type];
    const solid = ColorHelpers.setAlpha(color, 1);
    const accessibleColor = !this.skipSimilarColor
      ? ColorHelpers.getAccessibleColor(solid ?? color, 'AAA')
      : null;
    return accessibleColor ?? (ColorHelpers.isLight(color) ? 'black' : 'white');
  }
}
