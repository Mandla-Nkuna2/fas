import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobcardPage } from './jobcard.page';

const routes: Routes = [
  {
    path: '',
    component: JobcardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobcardPageRoutingModule {}
