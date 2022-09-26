import { Component, Input, OnInit } from '@angular/core';
import { CardBaseComponent } from './card-base.component';

import { ICardConfig } from './helpers/card-config';
import { HSLA, IStyleConfig } from '../../utilities';

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
    success?: HSLA;
    info?: HSLA;
    warning?: HSLA;
    danger?: HSLA;
    question?: HSLA;
  };

  @Input() cardConfigOverride: Partial<ICardConfig> = {};

  @Input() skipSimilarColor: boolean = false;

  // Private Readonly Default Background Color Map For Each Alert Type As HSLA
  private readonly backgroundColorMap: { [key: string]: HSLA } = {
    success: new HSLA(120, 100, 90, .5),
    info: new HSLA(210, 100, 90, .5),
    warning: new HSLA(60, 100, 90, .5),
    danger: new HSLA(0, 100, 90, .5),
    question: new HSLA(240, 100, 90, .5),
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
  public get cardConfig(): Partial<ICardConfig> {
    const overrideStyles: IStyleConfig | undefined = this.cardConfigOverride?.styles;
    return {
      classes: this.cardConfigOverride.classes ?? {},
      styles: {
        default: {

          width: overrideStyles?.default.width,
          height: overrideStyles?.default.height,

          padding: overrideStyles?.default.padding,
          margin: overrideStyles?.default.margin,

          background: overrideStyles?.default.background ?? this.background,
          color: overrideStyles?.default.color ?? this.textColor,

          border: overrideStyles?.default.border ?? this.border,
          borderRadius: overrideStyles?.default.borderRadius ?? '0.5rem',

          boxShadow: overrideStyles?.default.boxShadow ?? this.boxShadow,

        },
        states: overrideStyles?.states ?? undefined,
      },
    };
  }

  get background(): HSLA {
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
  public get border(): string {
    const color = this.background;
    const borderColor = color.copy();
    borderColor.darken(25)
    return `1px solid ${borderColor.prop}`
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
  public get textColor(): HSLA {
    const bgColor = this.background.copy();
    bgColor.setA(1);
    const textColor = !this.skipSimilarColor ? bgColor.getSimilarTextColor('AAA') : bgColor.getTextColor();

    return textColor;
  }

  /**
   * getter: boxShadow
   *
   * use the backgroundColor to get the box shadow color
   * the box shadow should be only 10% opaque
   * the box shadow should be subtle and only on the bottom
   *
   */
  public get boxShadow(): string {
    const color = this.background.copy();
    color.setA(0.5)
    return `2px 0 5px ${color.prop}`;
  }
}
