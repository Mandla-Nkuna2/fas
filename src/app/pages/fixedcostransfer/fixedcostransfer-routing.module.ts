import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FixedcostransferPage } from './fixedcostransfer.page';

const routes: Routes = [
  {
    path: '',
    component: FixedcostransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FixedcostransferPageRoutingModule {}
