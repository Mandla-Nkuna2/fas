import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuelbrowsenoilctrlPage } from './fuelbrowsenoilctrl.page';

const routes: Routes = [
  {
    path: '',
    component: FuelbrowsenoilctrlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuelbrowsenoilctrlPageRoutingModule {}
