import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevenueearnedPage } from './revenueearned.page';

const routes: Routes = [
  {
    path: '',
    component: RevenueearnedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevenueearnedPageRoutingModule {}
