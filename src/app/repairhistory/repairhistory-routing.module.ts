import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepairhistoryPage } from './repairhistory.page';

const routes: Routes = [
  {
    path: '',
    component: RepairhistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepairhistoryPageRoutingModule {}
