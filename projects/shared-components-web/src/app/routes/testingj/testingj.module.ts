import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingjRoutingModule } from './testingj-routing.module';
import { TestingComponent } from './testing/testing.component';
import { SharedComponentsModule } from 'projects/ngx-shared-components/src/lib';


@NgModule({
  declarations: [
    TestingComponent
  ],
  imports: [
    CommonModule,
    TestingjRoutingModule,
    SharedComponentsModule,
  ]
})
export class TestingjModule { }
