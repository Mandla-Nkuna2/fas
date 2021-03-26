import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrafficfinePage } from './trafficfine.page';

const routes: Routes = [
  {
    path: '',
    component: TrafficfinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrafficfinePageRoutingModule {}
