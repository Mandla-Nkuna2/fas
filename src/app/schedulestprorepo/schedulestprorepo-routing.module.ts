import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulestprorepoPage } from './schedulestprorepo.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulestprorepoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulestprorepoPageRoutingModule {}
