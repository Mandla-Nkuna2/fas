import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepairhistorydetailPage } from './repairhistorydetail.page';

const routes: Routes = [
  {
    path: '',
    component: RepairhistorydetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepairhistorydetailPageRoutingModule {}
