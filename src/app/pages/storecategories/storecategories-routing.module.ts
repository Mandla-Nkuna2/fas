import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorecategoriesPage } from './storecategories.page';

const routes: Routes = [
  {
    path: '',
    component: StorecategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StorecategoriesPageRoutingModule {}
