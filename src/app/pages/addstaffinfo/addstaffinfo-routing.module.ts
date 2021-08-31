import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddstaffinfoPage } from './addstaffinfo.page';

const routes: Routes = [
  {
    path: '',
    component: AddstaffinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddstaffinfoPageRoutingModule {}
