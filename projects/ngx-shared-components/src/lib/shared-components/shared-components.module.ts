import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBaseComponent } from './components/cards/card-base.component';
import { CardAlertComponent } from './components/cards/card-alert.component';
import { ApplyCssPropsDirective } from './directives/apply-css-props.directive';
import { NgIconsModule } from '@ng-icons/core';

import {
  CardInternalComponent,
  CommonMenuComponent,
  MenuButtonComponent,
  MenuComponent,
  MenuDropdownComponent,
  MenuItemComponent,
} from './components';

import { includedIcons } from './icons';

@NgModule({
  declarations: [
    CardBaseComponent,
    CardAlertComponent,
    CardInternalComponent,
    ApplyCssPropsDirective,
    MenuButtonComponent,
    MenuDropdownComponent,
    MenuItemComponent,
    MenuComponent,
    CommonMenuComponent,
  ],
  imports: [CommonModule, NgIconsModule.withIcons(includedIcons)],
  exports: [
    CardBaseComponent,
    CardAlertComponent,
    ApplyCssPropsDirective,
    MenuItemComponent,
    MenuComponent,
    CommonMenuComponent,
  ],
})
export class SharedComponentsModule {}
