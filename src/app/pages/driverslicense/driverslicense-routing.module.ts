import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverslicensePage } from './driverslicense.page';

const routes: Routes = [
  {
    path: '',
    component: DriverslicensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverslicensePageRoutingModule {}
