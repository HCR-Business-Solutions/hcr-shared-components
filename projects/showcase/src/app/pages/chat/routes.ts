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
    component: RootComponent
  },
  {
    path: 'message-bubble',
    component: MessageBubbleShowcaseComponent
  },
  {
    path: 'message',
    component: MessageShowcaseComponent,
  },
  {
    path: 'message-group',
    component: MessageGroupShowcaseComponent,
  },
  {
    path: 'conversation',
    component: ConversationShowcaseComponent,
  },
  {
    path: 'types',
    component: TypesComponent
  }
];
