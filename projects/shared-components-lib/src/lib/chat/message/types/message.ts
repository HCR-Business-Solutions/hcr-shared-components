import { MessageUser } from './message-user';
import { MessageStatus } from './message-status';

export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  status: MessageStatus;
  owner: MessageUser;
}
