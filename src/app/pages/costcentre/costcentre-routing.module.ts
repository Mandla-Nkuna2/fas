import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostcentrePage } from './costcentre.page';

const routes: Routes = [
  {
    path: '',
    component: CostcentrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostcentrePageRoutingModule {}
