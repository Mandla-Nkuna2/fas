import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OilstorePage } from './oilstore.page';

const routes: Routes = [
  {
    path: '',
    component: OilstorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OilstorePageRoutingModule {}
