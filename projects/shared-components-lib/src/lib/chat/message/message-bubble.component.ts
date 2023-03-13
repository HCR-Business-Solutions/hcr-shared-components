import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MessageStatusComponent } from './message-status.component';
import {
  MessageTimestampComponent,
  MessageTimestampOptions,
} from './message-timestamp.component';
import { MessageType } from './types';
import { Message } from './types/message';

export interface BubbleCorners {
  topLeft: boolean;
  topRight: boolean;
  bottomRight: boolean;
  bottomLeft: boolean;
}

export interface BubbleStyles {
  rounding?: {
    radius?: string;
    corners?: Partial<BubbleCorners>;
  };
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  borderStyle?: string;
  borderWidth?: string;
  padding?: string;
  textAlign?: string;
}

export interface MessageBubbleOptions {
  displayOwner?: boolean;
  displayTimestamp?: boolean;
  displayStatus?: boolean;

  messageType?: MessageType;

  styles?: BubbleStyles;
}

@Component({
  selector: 'nyhcr-message-bubble',
  standalone: true,
  imports: [CommonModule, MessageTimestampComponent, MessageStatusComponent],
  template: `
    <div
      class="message-bubble-container"
      [class.received-message]="this.messageType === 'RECEIVED'"
      [class.sent-message]="this.messageType === 'SENT'"
      [style.border-top-left-radius]="this.getBorderRadius('TL')"
      [style.border-top-right-radius]="this.getBorderRadius('TR')"
      [style.border-bottom-right-radius]="this.getBorderRadius('BR')"
      [style.border-bottom-left-radius]="this.getBorderRadius('BL')"
      [style.background-color]="this.backgroundColor"
      [style.color]="this.textColor"
      [style.border-color]="this.borderColor"
      [style.border-style]="this.options?.styles?.borderStyle ?? 'solid'"
      [style.border-width]="this.options?.styles?.borderWidth ?? '1px'"
      [style.text-align]="this.options?.styles?.textAlign ?? 'start'"
      [style.padding]="this.options?.styles?.padding ?? '0.75rem'"
      style="overflow:hidden;"
    >
      <div class="meta-content" *ngIf="this.metaPresent">
        <div class="owner" *ngIf="this.displayOwner">
          {{ this.message.owner.display }}
        </div>
        <nyhcr-message-timestamp
          *ngIf="this.options?.displayTimestamp"
          [message]="this.message"
          [options]="this.timestampOptions"
        ></nyhcr-message-timestamp>
        <div class="spacer" *ngIf="this.displayStatus"></div>
        <div class="status-container" *ngIf="this.displayStatus">
          <!-- <nyhcr-message-status [message]="this.message" /> -->
        </div>
      </div>
      <div class="message-content">
        {{ this.message.content }}
      </div>
    </div>
  `,
  styles: [
    `
      .message-content {
        overlow-wrap: break-word;
      }
    `,
    `
      .meta-content {
        font-size: 0.75rem;
        margin-top: -0.25rem;
        display: flex;
        flex-direction: row;
        gap: 0.25rem;
      }
    `,
    `
      .owner {
        font-weight: 700;
      }
    `,
    `
      .spacer {
        flex-grow: 1;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageBubbleComponent {
  @Input() message!: Message;
  @Input() options?: MessageBubbleOptions;

  @Input() timestampOptions?: MessageTimestampOptions;

  get messageType(): MessageType {
    return this.options?.messageType ?? 'SENT';
  }

  get displayOwner(): boolean {
    return this.options?.displayOwner ?? this.messageType === 'RECEIVED';
  }

  get displayStatus(): boolean {
    return this.options?.displayOwner ?? this.messageType === 'SENT';
  }

  get metaPresent(): boolean {
    return !!(
      this.displayOwner ||
      this.options?.displayTimestamp ||
      this.displayStatus
    );
  }

  get backgroundColor(): string {
    if (this.options?.styles?.backgroundColor)
      return this.options?.styles?.backgroundColor;
    return this.messageType === 'SENT'
      ? 'hsla(269, 100%, 92%, 1)'
      : 'hsla(0, 0%, 100%, 1)';
  }

  get textColor(): string {
    if (this.options?.styles?.textColor) return this.options.styles.textColor;
    return 'hsla(24, 10%, 10%, .95)';
  }

  get borderColor(): string {
    if (this.options?.styles?.borderColor)
      return this.options.styles.borderColor;
    return 'hsla(24, 10%, 10%, .2)';
  }

  getBorderRadius(corner: 'TL' | 'TR' | 'BR' | 'BL'): string {
    let shouldRound: boolean = false;
    const radius: string = this.options?.styles?.rounding?.radius ?? '0.25rem';
    switch (corner) {
      case 'TL':
        shouldRound = this.options?.styles?.rounding?.corners?.topLeft ?? false;
        break;
      case 'TR':
        shouldRound =
          this.options?.styles?.rounding?.corners?.topRight ?? false;
        break;
      case 'BR':
        shouldRound =
          this.options?.styles?.rounding?.corners?.bottomRight ?? false;
        break;
      case 'BL':
        shouldRound =
          this.options?.styles?.rounding?.corners?.bottomLeft ?? false;
        break;
    }
    return shouldRound ? radius : '0';
  }
}
