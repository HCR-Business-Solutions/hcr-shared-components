import { Component, OnInit,Input } from '@angular/core';
import { HSLA, IStyleConfig } from '../../utilities';
import { IToolbarConfig } from './helpers';



@Component({
  selector: 'lib-toolbar-brand-menu',
  template: `
    <lib-toolbar-base [toolbarConfig]="this.toolbarConfig">
      <div class="toolbar-content">
        <div class="logo-content">
          <div class="logo">
            <a href={{this.url}}>
              <img src="assets/logo.png" alt="{{this.altLogo}}" />
            </a>
          </div>
          <div class="app-name-content">
            <a  class="stretched-link"></a>
            <div class="app-name">
              <strong>{{this.appName}}</strong>
            </div>
            <div class="sub-app-name">
              {{this.subAppName}}
            </div>
          </div>
        </div>
      </div>
    </lib-toolbar-base>
  `,
  styles: [
    `
      .toolbar-content {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        z-index: 40;
        min-height: 70px;

            }
    `,
    `
      .logo-content{
        display: flex;
        align-self: stretch!important;
        align-items: center;
        height: 100%!important;
        margin-right: auto!important;
        vertical-align: middle;
        min-height: 70px;
      }
    `,
    `
      .logo{
        padding: 0.5rem!important;
        padding-top: 0px;
      }
    `,
    `
      .app-name-content{
        position: relative!important;
        color: #fff!important;
        opacity: 0.9;
        white-space: nowrap;
        padding: 0.5rem!important;
      }
    `,
    `
      .app-name{
        line-height: 1em;
        padding-bottom: 0.35rem;
        white-space: nowrap;
      }
    `,
    `
      .sub-app-name{
        font-size: 14px;
        font-weight: 500;
        line-height: 1em;
      }
    `,
    ]
})
export class ToolbarBrandMenuComponent implements OnInit {

  @Input() type: 'dhcr' | 'its' = 'dhcr';
  @Input() appName: string = 'Test';
  @Input() subAppName: string = 'Test';
  @Input() url: string ="https://www.ny.gov/"
  @Input() altLogo:  string = "Test";

  @Input() toolbarConfigOverride: Partial<IToolbarConfig> = {};

  @Input() customBackgroundColors?: {
    dhcr?: HSLA;
    its?: HSLA;
  };

  @Input() skipSimilarColor: boolean = false;

    // Private Readonly Default Background Color Map For Each background Type As HSLA
    private readonly backgroundColorMap: { [key: string]: HSLA } = {
      dhcr: new HSLA(268, 41, 34, 1),
      its: new HSLA(17, 79, 40, 1),
    };

// toolbarConfig: IToolbarConfig = {
//   styles: {
//     default: {
//       background: new HSLA (268, 41, 34),
//       color: new HSLA (0,0,100),
//       boxShadow: '5px 0px 10px rgb(0 0 0 .5)',
//       padding: '0 .75em 0 .75em'
//     }
//   }
// }

  constructor() { }

  ngOnInit(): void {
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
    public get toolbarConfig(): Partial<IToolbarConfig> {
      const overrideStyles: IStyleConfig | undefined = this.toolbarConfigOverride?.styles;
      return {
        classes: this.toolbarConfigOverride.classes ?? {},
        styles: {
          default: {

            width: overrideStyles?.default.width,
            height: overrideStyles?.default.height,

            padding: overrideStyles?.default.padding,
            margin: overrideStyles?.default.margin,

            background: overrideStyles?.default.background ?? this.background,
            color: overrideStyles?.default.color ?? this.textColor,

            border: overrideStyles?.default.border ?? this.border,
            borderRadius: overrideStyles?.default.borderRadius ,

            boxShadow: overrideStyles?.default.boxShadow ?? this.boxShadow,

          },
          states: overrideStyles?.states ?? undefined,
        },
      };
    }

    get background(): HSLA {
      console.log(this.backgroundColorMap[this.type]);
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
