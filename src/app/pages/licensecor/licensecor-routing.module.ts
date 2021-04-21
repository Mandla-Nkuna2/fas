import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicensecorPage } from './licensecor.page';

const routes: Routes = [
  {
    path: '',
    component: LicensecorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicensecorPageRoutingModule {}
