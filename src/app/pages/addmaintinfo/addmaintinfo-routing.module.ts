import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddmaintinfoPage } from './addmaintinfo.page';

const routes: Routes = [
  {
    path: '',
    component: AddmaintinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddmaintinfoPageRoutingModule {}
