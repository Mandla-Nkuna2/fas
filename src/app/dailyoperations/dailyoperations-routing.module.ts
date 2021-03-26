import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyoperationsPage } from './dailyoperations.page';

const routes: Routes = [
  {
    path: '',
    component: DailyoperationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyoperationsPageRoutingModule {}
