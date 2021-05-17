import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VotecodesPage } from './votecodes.page';

const routes: Routes = [
  {
    path: '',
    component: VotecodesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotecodesPageRoutingModule {}
