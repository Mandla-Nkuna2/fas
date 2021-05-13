import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemmakemodelPage } from './itemmakemodel.page';

const routes: Routes = [
  {
    path: '',
    component: ItemmakemodelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemmakemodelPageRoutingModule {}
