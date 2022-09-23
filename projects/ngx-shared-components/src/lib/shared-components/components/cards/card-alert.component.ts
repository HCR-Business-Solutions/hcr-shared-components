import { Component, Input, OnInit } from '@angular/core';
import { CardBaseComponent } from './card-base.component';

import * as ColorHelpers from '../../utilities/color';
import { CardConfig } from './helpers/card-config';

@Component({
  template: `
    <lib-card-base
      [containerClasses]="this.containerClasses"
      [cardConfig]="this.cardConfig"
    >
      <div class="alert-inner-container">
        <!-- Display the icon using content projection selector alertIcon -->
        <div class="alert-icon">
          <ng-icon [name]="this.icon" [size]="this.iconSize"></ng-icon>
        </div>
        <!-- Display the message using content projection selector alertMessage -->
        <div class="alert-message">
          <ng-content></ng-content>
        </div>
      </div>
    </lib-card-base>
  `,
  styles: [
    `
      .alert-inner-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5rem;
      }
    `,
    `
      .alert-icon {
        min-width: 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
    `,
    `
      .alert-message {
        flex: 1 1 auto;
      }
    `,
  ],
  selector: 'lib-card-alert',
})
export class CardAlertComponent implements OnInit {
  @Input() type: 'success' | 'info' | 'warning' | 'danger' | 'question' =
    'success';
  @Input() containerClasses?: { [key: string]: boolean } = {};
  @Input() cardClasses?: { [key: string]: boolean } = {};
  @Input() iconSize: string = '3.5rem';

  @Input() customBackgroundColors?: {
    success?: string;
    info?: string;
    warning?: string;
    danger?: string;
    question?: string;
  };

  @Input() cardConfigOverride: Partial<CardConfig> = {};

  @Input() skipSimilarColor: boolean = false;

  // Private Readonly Default Background Color Map For Each Alert Type As HSLA
  private readonly backgroundColorMap: { [key: string]: string } = {
    success: 'hsla(120, 100%, 90%, .5)',
    info: 'hsla(210, 100%, 90%, .5)',
    warning: 'hsla(60, 100%, 90%, .5)',
    danger: 'hsla(0, 100%, 90%, .5)',
    question: 'hsla(240, 100%, 90%, .5)',
  };

  private readonly iconMap: { [key: string]: string } = {
    success: 'heroCheckCircle',
    info: 'heroInformationCircle',
    warning: 'heroExclamationCircle',
    danger: 'heroXCircle',
    question: 'heroQuestionMarkCircle',
  };

  constructor() {}

  ngOnInit(): void {}

  get icon(): string {
    return this.iconMap[this.type];
  }

  /**
   * getter: cardConfig
   *
   * @returns CardConfig
   *
   * @description gets the current CardConfig
   * if cardConfigOverride has classes, use those else use an empty object
   * if cardConfigOverride has styles, use those
   * if cardConfigOverride has no styles, gather the styles from getters and methods
   *
   */
  public get cardConfig(): Partial<CardConfig> {
    const overrideStyles = this.cardConfigOverride?.styles ?? {};
    return {
      classes: this.cardConfigOverride.classes ?? {},
      styles: {
        backgroundColor: overrideStyles.backgroundColor ?? this.backgroundColor,
        textColor: overrideStyles.textColor ?? this.textColor(),
        borderColor: overrideStyles.borderColor ?? this.borderColor(),
        borderRadius: overrideStyles.borderRadius ?? '0.5rem',
        borderWidth: overrideStyles.borderWidth ?? '1px',
        borderStyle: overrideStyles.borderStyle ?? 'solid',
        boxShadow: overrideStyles.boxShadow ?? this.boxShadow(),
        padding: overrideStyles.padding ?? '1rem',
        margin: overrideStyles.margin ?? '0.5rem',
      },
    };
  }

  get backgroundColor(): string {
    return (
      this.customBackgroundColors?.[this.type] ??
      this.backgroundColorMap[this.type]
    );
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
    const color = this.backgroundColor;
    const solid = ColorHelpers.setAlpha(color, 1);
    const accessibleColor = !this.skipSimilarColor
      ? ColorHelpers.getAccessibleColor(solid ?? color, 'AAA')
      : null;
    return accessibleColor ?? (ColorHelpers.isLight(color) ? 'black' : 'white');
  }

  /**
   * getter: boxShadow
   *
   * use the backgroundColor to get the box shadow color
   * the box shadow should be only 10% opaque
   * the box shadow should be subtle and only on the bottom
   *
   */
  public boxShadow(): string {
    const color = this.backgroundColor;
    const boxShadowColor = ColorHelpers.setAlpha(color, 0.5);
    return `2px 0 5px ${boxShadowColor ?? color}`;
  }
}
