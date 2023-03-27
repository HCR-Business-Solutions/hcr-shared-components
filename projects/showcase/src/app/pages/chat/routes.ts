import { Route } from '@angular/router';
import { ConversationShowcaseComponent } from './converstation-showcase.component';
import { MessageBubbleShowcaseComponent } from './message-bubble-showcase.component';
import { MessageGroupShowcaseComponent } from './message-group-showcase.component';
import { MessageShowcaseComponent } from './message-showcase.component';
import { RootComponent } from './root.component';
import { TypesComponent } from './types.component';

export const CHAT_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: RootComponent,
    data: {
      crumb: 'Components'
    }
  },
  {
    path: 'message-bubble',
    component: MessageBubbleShowcaseComponent,
    data: {
      crumb: 'Message Bubble'
    }
  },
  {
    path: 'message',
    component: MessageShowcaseComponent,
    data: {
      crumb: 'Message'
    }
  },
  {
    path: 'message-group',
    component: MessageGroupShowcaseComponent,
    data: {
      crumb: 'Message Group'
    }
  },
  {
    path: 'conversation',
    component: ConversationShowcaseComponent,
    data: {
      crumb: 'Conversation'
    }
  },
  {
    path: 'types',
    component: TypesComponent,
    data: {
      crumb: 'Types'
    }
  }
];
