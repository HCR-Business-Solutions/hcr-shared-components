import {
  Message,
  MessageBubbleOptions,
  MessageStatus,
  MessageUser,
} from 'projects/shared-components-lib/src/lib';
import { Properties, PropertyInfo, PropPack } from '../../../components';

export const userSelf: MessageUser = {
  id: 'self',
  display: 'Me',
  icon: 'https://picsum.photos/id/63/200',
};

export const userOther: MessageUser = {
  id: 'other',
  display: 'Sara Adams',
  icon: 'https://picsum.photos/id/64/200',
};

export const users = [userSelf, userOther] as const;

export const messageProperties: Properties = {
  messageContent: 'This is a test string.',
  messageStatus: 'READ',
  messageTimestamp: new Date().toISOString().slice(0, 16),
  messageSender: 'me',
};
export const messagePropertyInfo: PropertyInfo = {
  messageContent: 'string',
  messageStatus: ['ERROR', 'UNSENT', 'SENT', 'READ'],
  messageTimestamp: 'date',
  messageSender: ['me', 'other'],
};

export const messagePropPack: PropPack = {
  properties: messageProperties,
  info: messagePropertyInfo,
};

export function propsAsMessage(props: Properties, id: string): Message {
  return {
    id,
    content: props['messageContent'] as string,
    status: props['messageStatus'] as MessageStatus,
    owner: props['messageSender'] === 'me' ? userSelf : userOther,
    timestamp: props['messageTimestamp']
      ? new Date(props['messageTimestamp'] as string)
      : new Date(),
  };
}

export const bubbleOptionProperties: Properties = {};
export const bubbleOptionsPropertyInfo: PropertyInfo = {};
export const bubblePropPack: PropPack = {
  properties: bubbleOptionProperties,
  info: bubbleOptionsPropertyInfo,
};

export function propsAsBubbleOptions(props: Properties): MessageBubbleOptions {
  return {};
}
