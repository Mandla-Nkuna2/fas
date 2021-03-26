import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccidentmanagementPage } from './accidentmanagement.page';

const routes: Routes = [
  {
    path: '',
    component: AccidentmanagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccidentmanagementPageRoutingModule {}
