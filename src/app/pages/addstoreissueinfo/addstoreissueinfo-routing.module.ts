import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddstoreissueinfoPage } from './addstoreissueinfo.page';

const routes: Routes = [
  {
    path: '',
    component: AddstoreissueinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddstoreissueinfoPageRoutingModule {}
