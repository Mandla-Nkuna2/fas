import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowsertransferPage } from './browsertransfer.page';

const routes: Routes = [
  {
    path: '',
    component: BrowsertransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowsertransferPageRoutingModule {}
