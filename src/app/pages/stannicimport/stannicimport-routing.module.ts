import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StannicimportPage } from './stannicimport.page';

const routes: Routes = [
  {
    path: '',
    component: StannicimportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StannicimportPageRoutingModule {}
