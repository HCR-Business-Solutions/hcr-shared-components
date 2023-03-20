import { MessageBubbleOptions } from './message-bubble-options';
import { MessageGrouping } from './message-grouping';
import { MessageTimestampOptions } from './message-timestamp-options';
import { MessageType } from './message-type';

export interface MessageOptions {
  messageType?: MessageType;
  showAvatar?: boolean;
  offsetAvatar?: boolean;
  grouping?: MessageGrouping;
  bubble?: MessageBubbleOptions;
  timestamp?: MessageTimestampOptions;
}
