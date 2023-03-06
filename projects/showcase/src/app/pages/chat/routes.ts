import { Route } from '@angular/router';
import { ConversationShowcaseComponent } from './converstation-showcase.component';
import { MessageBubbleShowcaseComponent } from './message-bubble-showcase.component';
import { MessageGroupShowcaseComponent } from './message-group-showcase.component';
import { MessageShowcaseComponent } from './message-showcase.component';

export const CHAT_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'message',
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
];
