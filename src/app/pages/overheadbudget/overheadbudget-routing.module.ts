import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverheadbudgetPage } from './overheadbudget.page';

const routes: Routes = [
  {
    path: '',
    component: OverheadbudgetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverheadbudgetPageRoutingModule {}
