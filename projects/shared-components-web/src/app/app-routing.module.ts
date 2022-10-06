import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'card',
    loadChildren: () =>
      import('./routes/card/card.module').then((m) => m.CardModule),
  },
  {
    path: 'testingj',
    loadChildren: () =>
      import('./routes/testingj/testingj.module').then((m) => m.TestingjModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
