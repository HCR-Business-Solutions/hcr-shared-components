import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingRComponent } from './testing-r.component';

const routes: Routes = [{ path: '', component: TestingRComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestingRRoutingModule { }
