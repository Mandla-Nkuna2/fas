import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiretrackingPage } from './tiretracking.page';

const routes: Routes = [
  {
    path: '',
    component: TiretrackingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiretrackingPageRoutingModule {}
