import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceSchedulesPage } from './service-schedules.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceSchedulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceSchedulesPageRoutingModule {}
