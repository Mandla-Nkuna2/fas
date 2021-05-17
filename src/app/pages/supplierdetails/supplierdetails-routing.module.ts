import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupplierdetailsPage } from './supplierdetails.page';

const routes: Routes = [
  {
    path: '',
    component: SupplierdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplierdetailsPageRoutingModule {}
