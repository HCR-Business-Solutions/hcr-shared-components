import { BubbleStyles } from './bubble-styles';
import { MessageType } from './message-type';

export interface MessageBubbleOptions {
  displayOwner?: boolean;
  displayTimestamp?: boolean;
  displayStatus?: boolean;

  messageType?: MessageType;

  styles?: BubbleStyles;
}
