import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBaseComponent } from './components/cards/card-base.component';
import { CardAlertComponent } from './components/cards/card-alert.component';
import { ApplyCssPropsDirective } from './directives/apply-css-props.directive';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroCheckCircle,
  heroCheckBadge,
  heroShieldCheck,
  heroExclamationCircle,
  heroInformationCircle,
  heroQuestionMarkCircle,
  heroXCircle,
  heroShieldExclamation,
  heroHandRaised,
  heroHome,
  heroNoSymbol,
  heroUserCircle,
  heroLockClosed,
  heroLockOpen,
} from '@ng-icons/heroicons/outline';
import { CardInternalComponent } from './components/cards/card-internal.component';

const includedIcons: Record<string, string> = {
  heroCheckCircle,
  heroExclamationCircle,
  heroInformationCircle,
  heroQuestionMarkCircle,
  heroXCircle,
  heroShieldCheck,
  heroShieldExclamation,
  heroCheckBadge,
  heroHandRaised,
  heroHome,
  heroNoSymbol,
  heroUserCircle,
  heroLockClosed,
  heroLockOpen,
};
@NgModule({
  declarations: [
    CardBaseComponent,
    CardAlertComponent,
    ApplyCssPropsDirective,
    CardInternalComponent,
  ],
  imports: [CommonModule, NgIconsModule.withIcons(includedIcons)],
  exports: [CardBaseComponent, CardAlertComponent, ApplyCssPropsDirective],
})
export class SharedComponentsModule {}
