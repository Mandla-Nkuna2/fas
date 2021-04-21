import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LosscontrolPage } from './losscontrol.page';

const routes: Routes = [
  {
    path: '',
    component: LosscontrolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LosscontrolPageRoutingModule {}
