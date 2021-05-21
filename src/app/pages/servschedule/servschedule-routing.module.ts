import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServschedulePage } from './servschedule.page';

const routes: Routes = [
  {
    path: '',
    component: ServschedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServschedulePageRoutingModule {}
