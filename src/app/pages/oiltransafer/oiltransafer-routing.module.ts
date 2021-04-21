import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OiltransaferPage } from './oiltransafer.page';

const routes: Routes = [
  {
    path: '',
    component: OiltransaferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OiltransaferPageRoutingModule {}
