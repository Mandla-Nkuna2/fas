import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddissuesinfoPage } from './addissuesinfo.page';

const routes: Routes = [
  {
    path: '',
    component: AddissuesinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddissuesinfoPageRoutingModule {}
