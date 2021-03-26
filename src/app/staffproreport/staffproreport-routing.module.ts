import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffproreportPage } from './staffproreport.page';

const routes: Routes = [
  {
    path: '',
    component: StaffproreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffproreportPageRoutingModule {}
