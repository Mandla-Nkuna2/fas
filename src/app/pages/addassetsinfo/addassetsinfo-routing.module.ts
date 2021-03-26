import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddassetsinfoPage } from './addassetsinfo.page';

const routes: Routes = [
  {
    path: '',
    component: AddassetsinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddassetsinfoPageRoutingModule {}
