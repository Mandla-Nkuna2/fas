import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevenucostsPage } from './revenucosts.page';

const routes: Routes = [
  {
    path: '',
    component: RevenucostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevenucostsPageRoutingModule {}
