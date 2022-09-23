import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { ShowcaseComponent } from './sub-routes/showcase/showcase.component';
import { SharedComponentsModule } from 'projects/ngx-shared-components/src/lib';

@NgModule({
  declarations: [ShowcaseComponent],
  imports: [CommonModule, CardRoutingModule, SharedComponentsModule],
})
export class CardModule {}
