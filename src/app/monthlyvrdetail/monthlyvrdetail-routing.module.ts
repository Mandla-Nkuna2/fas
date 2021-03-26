import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthlyvrdetailPage } from './monthlyvrdetail.page';

const routes: Routes = [
  {
    path: '',
    component: MonthlyvrdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthlyvrdetailPageRoutingModule {}
