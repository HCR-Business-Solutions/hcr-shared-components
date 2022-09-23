import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './sub-routes/showcase/showcase.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardRoutingModule {}
