import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverheadtransPage } from './overheadtrans.page';

const routes: Routes = [
  {
    path: '',
    component: OverheadtransPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverheadtransPageRoutingModule {}
