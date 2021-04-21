import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OilissuesPage } from './oilissues.page';

const routes: Routes = [
  {
    path: '',
    component: OilissuesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OilissuesPageRoutingModule {}
