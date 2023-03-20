import { MessageStatus } from './message-status';
import { MessageUser } from './message-user';

export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  status: MessageStatus;
  owner: MessageUser;
}
