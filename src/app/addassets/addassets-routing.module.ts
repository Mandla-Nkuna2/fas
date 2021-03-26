import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddassetsPage } from './addassets.page';

const routes: Routes = [
  {
    path: '',
    component: AddassetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddassetsPageRoutingModule {}
