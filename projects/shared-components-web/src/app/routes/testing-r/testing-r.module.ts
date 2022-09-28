import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingRRoutingModule } from './testing-r-routing.module';
import { TestingRComponent } from './testing-r.component';
import { SharedComponentsModule } from 'projects/ngx-shared-components/src/lib';

@NgModule({
  declarations: [TestingRComponent],
  imports: [CommonModule, TestingRRoutingModule, SharedComponentsModule],
})
export class TestingRModule {}
