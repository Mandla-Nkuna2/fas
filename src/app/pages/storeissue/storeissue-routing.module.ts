import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreissuePage } from './storeissue.page';

const routes: Routes = [
  {
    path: '',
    component: StoreissuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreissuePageRoutingModule {}
