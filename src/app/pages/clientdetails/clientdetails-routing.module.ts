import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientdetailsPage } from './clientdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ClientdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientdetailsPageRoutingModule {}
