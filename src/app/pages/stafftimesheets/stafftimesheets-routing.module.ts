import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StafftimesheetsPage } from './stafftimesheets.page';

const routes: Routes = [
  {
    path: '',
    component: StafftimesheetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StafftimesheetsPageRoutingModule {}
