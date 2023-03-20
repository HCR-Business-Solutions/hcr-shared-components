import { MessageBubbleOptions } from './message-bubble-options';
import { MessageTimestampOptions } from './message-timestamp-options';

export interface ConversationOptions {
  showAvatar?: boolean;
  offsetAvatar?: boolean;
  bubble?: MessageBubbleOptions;
  timestamp?: MessageTimestampOptions;
}
