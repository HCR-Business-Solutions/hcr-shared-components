import {
  Message,
  MessageBubbleOptions,
  MessageGrouping,
  MessageOptions,
  MessageStatus,
  MessageTimestampOptions,
  MessageType,
  MessageUser,
} from 'projects/shared-components-lib/src/lib';
import { Properties, PropertyInfo, PropPack } from '../../../components';

export const userSelf: MessageUser = {
  id: 'self',
  display: 'Me',
  displayShort: 'ME',
  icon: 'https://picsum.photos/id/63/200',
};

export const userOther: MessageUser = {
  id: 'other',
  display: 'Sara Adams',
  displayShort: 'SA',
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
  let date = new Date();

  if (props['messageTimestamp']) {
    date = new Date(props['messageTimestamp'] as string);
  }

  return {
    id,
    content: props['messageContent'] as string,
    status: props['messageStatus'] as MessageStatus,
    owner: props['messageSender'] === 'me' ? userSelf : userOther,
    timestamp: date,
  };
}

export const messageOptionProperties: Properties = {
  showAvatar: 'No',
  messageType: 'SENT',
  grouping: 'NONE',
};
export const messageOptionPropertyInfo: PropertyInfo = {
  showAvatar: ['Yes', 'No'],
  messageType: ['SENT', 'RECEIVED'],
  grouping: ['NONE', 'START', 'INNER', 'END'],
};
export const messageOptionPack: PropPack = {
  properties: messageOptionProperties,
  info: messageOptionPropertyInfo,
};

export function propsAsMessageOptions(props: Properties): MessageOptions {
  return {
    showAvatar: props['showAvatar'] === 'Yes',
    messageType: props['messageType'] as MessageType,
    grouping: props['grouping'] as MessageGrouping,
  };
}

export const bubbleOptionProperties: Properties = {
  displayOwner: 'No',
  displayTimestamp: 'No',
  displayStatus: 'No',
  messageType: 'SENT',
  roundingRadius: '0.25rem',
  roundTopLeft: 'Yes',
  roundTopRight: 'Yes',
  roundBottomRight: 'Yes',
  roundBottomLeft: 'Yes',
  backgroundColor: '',
  textColor: '',
  borderColor: '',
};
export const bubbleOptionsPropertyInfo: PropertyInfo = {
  displayOwner: ['Yes', 'No'],
  displayTimestamp: ['Yes', 'No'],
  displayStaus: ['Yes', 'No'],
  messageType: ['SENT', 'RECEIVED'],
  roundingRadius: 'string',
  roundTopLeft: ['Yes', 'No'],
  roundTopRight: ['Yes', 'No'],
  roundBottomRight: ['Yes', 'No'],
  roundBottomLeft: ['Yes', 'No'],
  backgroundColor: 'string',
  textColor: 'string',
  borderColor: 'string',
};
export const bubblePropPack: PropPack = {
  properties: bubbleOptionProperties,
  info: bubbleOptionsPropertyInfo,
};

export function propsAsBubbleOptions(props: Properties): MessageBubbleOptions {
  return {
    displayOwner: props['displayOwner'] === 'Yes',
    displayTimestamp: props['displayTimestamp'] === 'Yes',
    displayStatus: props['displayStatus'] === 'Yes',
    messageType: props['messageType'] as MessageType,
    styles: {
      rounding: {
        radius: props['roundingRadius'] as string,
        corners: {
          topLeft: props['roundTopLeft'] === 'Yes',
          topRight: props['roundTopRight'] === 'Yes',
          bottomRight: props['roundBottomRight'] === 'Yes',
          bottomLeft: props['roundBottomLeft'] === 'Yes',
        },
      },
      backgroundColor: props['backgroundColor'] as string,
      textColor: props['textColor'] as string,
      borderColor: props['borderColor'] as string,
    },
  };
}

export const timestampOptionProperties: Properties = {
  timeFormat: 'auto',
};
export const timestampOptionPropInfo: PropertyInfo = {
  timeFormat: 'string',
};
export const timestampPack: PropPack = {
  properties: timestampOptionProperties,
  info: timestampOptionPropInfo,
};

export function propsAsTimestampOptions(
  props: Properties
): MessageTimestampOptions {
  return {
    format: props['timeFormat'] as string,
  };
}
