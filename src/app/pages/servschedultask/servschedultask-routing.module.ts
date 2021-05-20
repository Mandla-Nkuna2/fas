import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServschedultaskPage } from './servschedultask.page';

const routes: Routes = [
  {
    path: '',
    component: ServschedultaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServschedultaskPageRoutingModule {}
