import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemmanagementPage } from './systemmanagement.page';

const routes: Routes = [
  {
    path: '',
    component: SystemmanagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemmanagementPageRoutingModule {}
