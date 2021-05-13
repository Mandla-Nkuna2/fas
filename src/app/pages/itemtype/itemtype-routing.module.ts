import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemtypePage } from './itemtype.page';

const routes: Routes = [
  {
    path: '',
    component: ItemtypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemtypePageRoutingModule {}
