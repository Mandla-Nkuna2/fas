import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuelconsumptionPage } from './fuelconsumption.page';

const routes: Routes = [
  {
    path: '',
    component: FuelconsumptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuelconsumptionPageRoutingModule {}
