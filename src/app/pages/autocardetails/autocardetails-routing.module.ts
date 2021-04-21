import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutocardetailsPage } from './autocardetails.page';

const routes: Routes = [
  {
    path: '',
    component: AutocardetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutocardetailsPageRoutingModule {}
