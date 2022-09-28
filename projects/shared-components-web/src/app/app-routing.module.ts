import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'card',
    loadChildren: () =>
      import('./routes/card/card.module').then((m) => m.CardModule),
  },
  { path: 'testing-r', loadChildren: () => import('./routes/testing-r/testing-r.module').then(m => m.TestingRModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
