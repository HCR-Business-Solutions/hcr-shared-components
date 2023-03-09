import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileIconComponent } from 'projects/shared-components-lib/src/lib';
import { PaletteComponent } from '../../components';

@Component({
  standalone: true,
  imports: [CommonModule, ProfileIconComponent, PaletteComponent],
  template: `
    <div class="flex flex-col gap-6 p-4">
      <h1 class="text-3xl">Profile Icon</h1>
      <div>
        <code>{{ this.invocation }}</code>
      </div>
      <p>
        The Profile Icon is a resuable styled component for displaying a Profile
        Icon, a circle "image" that represents the user.
      </p>
      <p>
        The component fills all available space, so in order to ensure a well
        drawn circle please maintain a square aspect ratio in the parent
        element.
      </p>
      <p>
        A profile icon component <strong class="font-extrabold">must</strong> be
        passed either <code>userText</code> or an <code>imgSrc</code>.
      </p>
      <hr />
      <h2 class="text-2xl">With an imgSrc</h2>
      <p>
        When passed an <code>imgSrc</code> the component will render an image
        using the passed imgSrc.
      </p>
      <p>
        <i
          >Note: It is best to choose a large square image for this. Images
          should be at least as large as the largest size you will show on the
          site.</i
        >
      </p>
      <div class="flex flex-col gap-1">
        <h3 class="text-lg">Example</h3>
        <code>
          <pre style="white-space: pre-wrap;">{{ this.imgExample }}</pre>
        </code>
      </div>
      <div
        class="flex flex-col md:flex-row gap-4 items-center md:items-end border border-stone-500 rounded-sm p-8"
      >
        <div
          class
          *ngFor="let size of this.sizes"
          [ngStyle]="{ width: size, height: size }"
        >
          <nyhcr-profile-icon
            imgSrc="https://picsum.photos/id/64/200"
          ></nyhcr-profile-icon>
        </div>
      </div>
      <hr />
      <h2 class="text-2xl">With userText</h2>
      <p>
        When passed <code>userText</code> the component will "create" an image
        using said text and a background color.
      </p>
      <p>
        <i>
          Note: The component is designed to work well with 2 standard width
          characters as userText.
        </i>
      </p>
      <p>
        In addition to user text, in this mode, you can also pass a
        <code>backgroundColor</code> and <code>textColor</code>.
      </p>
      <p>
        When a <code>backgroundColor</code> is not passed, the code will choose
        a background color from the following colors.
      </p>
      <div
        class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 w-full"
      >
        <app-palette *ngFor="let color of this.colors" [color]="color" />
      </div>
      <p>
        When a <code>textColor</code> is not passed, the code will chose a text
        color, based on the background color. This will only work if the
        background color is in hex format. Otherwise the color will be white.
      </p>
      <div class="flex flex-col gap-1">
        <h3 class="text-lg">Example</h3>
        <code>
          <pre style="white-space: pre-wrap;">{{ this.userTextExample }}</pre>
        </code>
      </div>
      <div
        class="flex flex-col md:flex-row gap-4 items-center md:items-end border border-stone-500 rounded-sm p-8"
      >
        <div
          class
          *ngFor="let size of this.sizes"
          [ngStyle]="{ width: size, height: size }"
        >
          <nyhcr-profile-icon userText="JD"></nyhcr-profile-icon>
        </div>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileIconShowcaseComponent {
  readonly sizes = [128, 96, 64, 48, 32, 16].map((size) => `${size}px`);

  readonly colors = [
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
  ].map((color) => `#${color}`);

  readonly invocation = '<nyhcr-profile-icon></nyhcr-profile-icon>';

  readonly imgExample = `
    <div style="width: 64px; height: 64px">
      <nyhcr-profile-icon imgSrc="...some img src"></nyhcr-profile-icon>
    </div>
  `;
  readonly userTextExample = `
    <div style="width: 64px; height: 64px">
      <nyhcr-profile-icon
        userText="...some user text"
        backgroundColor="...bg"
        textColor="...textColor">
      </nyhcr-profile-icon>
    </div>
  `;
  public getTextColor(color: string) {
    if (!color) return '#ffffff';

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

    const rgb = hexToRgb(color);
    if (!rgb) return '#ffffff';
    const { r, g, b } = rgb;

    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#ffffff';
  }
}
