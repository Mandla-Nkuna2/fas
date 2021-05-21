import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OiltypePage } from './oiltype.page';

const routes: Routes = [
  {
    path: '',
    component: OiltypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OiltypePageRoutingModule {}
