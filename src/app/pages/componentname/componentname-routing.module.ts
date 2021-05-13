import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentnamePage } from './componentname.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentnamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentnamePageRoutingModule {}
