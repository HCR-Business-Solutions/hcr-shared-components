import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBaseComponent } from './cards/card-base.component';
import { CardAlertComponent } from './cards/card-alert.component';
import { ApplyCssPropsDirective } from './directives/apply-css-props.directive';

@NgModule({
  declarations: [CardBaseComponent, CardAlertComponent, ApplyCssPropsDirective],
  imports: [CommonModule],
  exports: [CardBaseComponent, CardAlertComponent, ApplyCssPropsDirective],
})
export class SharedComponentsModule {}
