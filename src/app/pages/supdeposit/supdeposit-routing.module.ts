import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupdepositPage } from './supdeposit.page';

const routes: Routes = [
  {
    path: '',
    component: SupdepositPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupdepositPageRoutingModule {}
