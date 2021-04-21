import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuelissuesPage } from './fuelissues.page';

const routes: Routes = [
  {
    path: '',
    component: FuelissuesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuelissuesPageRoutingModule {}
