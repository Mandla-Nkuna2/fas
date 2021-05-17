import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffdetailsPage } from './staffdetails.page';

const routes: Routes = [
  {
    path: '',
    component: StaffdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffdetailsPageRoutingModule {}
