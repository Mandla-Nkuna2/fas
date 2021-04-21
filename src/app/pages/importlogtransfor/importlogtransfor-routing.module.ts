import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportlogtransforPage } from './importlogtransfor.page';

const routes: Routes = [
  {
    path: '',
    component: ImportlogtransforPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportlogtransforPageRoutingModule {}
