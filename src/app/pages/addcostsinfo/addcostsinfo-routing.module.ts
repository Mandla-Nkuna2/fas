import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcostsinfoPage } from './addcostsinfo.page';

const routes: Routes = [
  {
    path: '',
    component: AddcostsinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcostsinfoPageRoutingModule {}
