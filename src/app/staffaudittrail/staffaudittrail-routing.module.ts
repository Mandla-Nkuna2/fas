import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffaudittrailPage } from './staffaudittrail.page';

const routes: Routes = [
  {
    path: '',
    component: StaffaudittrailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffaudittrailPageRoutingModule {}
