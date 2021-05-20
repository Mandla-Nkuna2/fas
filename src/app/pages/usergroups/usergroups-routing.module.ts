import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsergroupsPage } from './usergroups.page';

const routes: Routes = [
  {
    path: '',
    component: UsergroupsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsergroupsPageRoutingModule {}
