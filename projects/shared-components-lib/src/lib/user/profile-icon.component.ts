import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'nyhcr-profile-icon',
  standalone: true,
  imports: [NgIf],
  template: `
    <div
      class="profile-icon-container"
      [style]="{
        backgroundColor: this.backgroundColor ?? '#fefefe'
      }"
    >
      <img
        *ngIf="this.imgSrc"
        [src]="this.imgSrc"
        alt="user profile image"
        class="profile-icon-image"
      />
      <div
        class="profile-icon-text-container"
        *ngIf="this.userText && !this.imgSrc"
      >
        <svg viewBox="0 0 100 100">
          <text
            class="profile-icon-text"
            [style]="{ fill: this.textColor, 'font-size': '200%' }"
            x="50%"
            y="61%"
            text-anchor="middle"
          >
            {{ this.userText }}
          </text>
        </svg>
      </div>
    </div>
  `,
  styles: [
    `
      .profile-icon-container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 9999px;
        display: grid;
        place-items: center;
        margin: 0;
        padding: 0;
        aspect-ratio: 1/1;
      }
    `,
    `
      .profile-icon-image {
        width: 100%;
        height: 100%;
        display: block;
      }
    `,
    `
      .profile-icon-text {
        width: 100%;
        height: 100%;
      }
    `,
    `
      .profile-icon-text-container {
        width: 100%;
        height: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileIconComponent implements OnInit {
  @Input() imgSrc?: string;
  @Input() userText?: string;
  @Input() backgroundColor?: string;
  @Input() textColor?: string;

  public ngOnInit(): void {
    // Ensure that the component is passed an imgSrc or userText variable, throw error otherwise.
    if (!this.imgSrc && !this.userText) {
      throw new SyntaxError(
        'ProfileIcon Component must be passed an imgSrc or userText'
      );
    }

    // if this.color is not defined generate one
    this.backgroundColor ??= this.generateProfileColor();

    // if this.textColor is not defined calculate one
    this.textColor ??= this.generateTextColor();
  }

  /**
   * choses a random color from a predefined list of colors
   * @returns css color value
   */
  private generateProfileColor(): string {
    const colors = [
      'd3f8e2',
      'e4c1f9',
      'f694c1',
      'ede7b1',
      'a9def9',
      '93b5c6',
      'ddedaa',
      'f0cf65',
      'd7816a',
      'bd4f6c',
    ];

    return `#${colors[Math.floor(Math.random() * colors.length)]}`;
  }

  private generateTextColor(): string {
    if (!this.backgroundColor) return '#ffffff';

    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null;
    };

    const rgb = hexToRgb(this.backgroundColor);
    if (!rgb) return '#ffffff';
    const { r, g, b } = rgb;

    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#ffffff';
  }
}
