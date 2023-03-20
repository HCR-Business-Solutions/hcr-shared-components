import { MessageBubbleOptions } from './message-bubble-options';
import { MessageTimestampOptions } from './message-timestamp-options';
import { MessageType } from './message-type';

export interface MessageGroupOptions {
  messageType?: MessageType;
  showAvatar?: boolean;
  offsetAvatar?: boolean;
  bubble?: MessageBubbleOptions;
  timestamp?: MessageTimestampOptions;
}
