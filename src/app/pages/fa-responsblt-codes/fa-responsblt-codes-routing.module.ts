import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaResponsbltCodesPage } from './fa-responsblt-codes.page';

const routes: Routes = [
  {
    path: '',
    component: FaResponsbltCodesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaResponsbltCodesPageRoutingModule {}
