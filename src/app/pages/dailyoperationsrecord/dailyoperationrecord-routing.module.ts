import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyoperationrecordPage } from './dailyoperationrecord.page';

const routes: Routes = [
  {
    path: '',
    component: DailyoperationrecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyoperationrecordPageRoutingModule {}
