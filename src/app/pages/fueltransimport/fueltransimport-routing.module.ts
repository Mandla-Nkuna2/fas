import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FueltransimportPage } from './fueltransimport.page';

const routes: Routes = [
  {
    path: '',
    component: FueltransimportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FueltransimportPageRoutingModule {}
