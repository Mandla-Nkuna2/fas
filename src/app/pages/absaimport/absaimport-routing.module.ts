import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbsaimportPage } from './absaimport.page';

const routes: Routes = [
  {
    path: '',
    component: AbsaimportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbsaimportPageRoutingModule {}
