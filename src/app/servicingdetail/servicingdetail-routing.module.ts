import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicingdetailPage } from './servicingdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ServicingdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicingdetailPageRoutingModule {}
