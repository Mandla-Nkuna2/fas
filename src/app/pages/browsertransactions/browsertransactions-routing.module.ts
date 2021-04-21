import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowsertransactionsPage } from './browsertransactions.page';

const routes: Routes = [
  {
    path: '',
    component: BrowsertransactionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowsertransactionsPageRoutingModule {}
