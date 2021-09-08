import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdditeminfoPage } from './additeminfo.page';

const routes: Routes = [
  {
    path: '',
    component: AdditeminfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdditeminfoPageRoutingModule {}
