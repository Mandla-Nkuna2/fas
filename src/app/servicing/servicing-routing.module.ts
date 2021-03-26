import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicingPage } from './servicing.page';

const routes: Routes = [
  {
    path: '',
    component: ServicingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicingPageRoutingModule {}
