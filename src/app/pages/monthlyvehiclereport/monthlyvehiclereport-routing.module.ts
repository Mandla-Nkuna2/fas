import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthlyvehiclereportPage } from './monthlyvehiclereport.page';

const routes: Routes = [
  {
    path: '',
    component: MonthlyvehiclereportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthlyvehiclereportPageRoutingModule {}
