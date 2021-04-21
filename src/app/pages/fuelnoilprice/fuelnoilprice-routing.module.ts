import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuelnoilpricePage } from './fuelnoilprice.page';

const routes: Routes = [
  {
    path: '',
    component: FuelnoilpricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuelnoilpricePageRoutingModule {}
