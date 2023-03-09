import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-palette',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="h-32 w-32 text-center text-lg font-semibold"
      [style.background-color]="this.color"
      [style.color]="this.text"
      [style.border-color]="this.borderColor ?? 'transparent'"
      [style.border-style]="this.borderStyle ?? 'none'"
      [style.border-width]="this.borderWidth ?? '0px'"
    >
      {{this.content ?? this.color}}
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaletteComponent {
  @Input() color!: string;
  @Input() content?: string;
  @Input() textColor?: string;
  @Input() borderColor?: string;
  @Input() borderStyle?: string;
  @Input() borderWidth?: string;

  get text() {
    if (this.textColor) return this.textColor;
    if (!this.color) return '#ffffff';

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

    const rgb = hexToRgb(this.color);
    if (!rgb) return '#ffffff';
    const { r, g, b } = rgb;

    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#ffffff';
  }

}
