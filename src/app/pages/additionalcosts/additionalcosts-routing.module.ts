import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdditionalcostsPage } from './additionalcosts.page';

const routes: Routes = [
  {
    path: '',
    component: AdditionalcostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdditionalcostsPageRoutingModule {}
