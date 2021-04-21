import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FixedcostdetailsPage } from './fixedcostdetails.page';

const routes: Routes = [
  {
    path: '',
    component: FixedcostdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FixedcostdetailsPageRoutingModule {}
