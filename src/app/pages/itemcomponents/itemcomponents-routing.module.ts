import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemcomponentsPage } from './itemcomponents.page';

const routes: Routes = [
  {
    path: '',
    component: ItemcomponentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemcomponentsPageRoutingModule {}
