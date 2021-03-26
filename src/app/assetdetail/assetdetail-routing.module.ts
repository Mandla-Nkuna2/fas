import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetdetailPage } from './assetdetail.page';

const routes: Routes = [
  {
    path: '',
    component: AssetdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetdetailPageRoutingModule {}
