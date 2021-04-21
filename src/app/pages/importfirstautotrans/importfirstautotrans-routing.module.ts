import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportfirstautotransPage } from './importfirstautotrans.page';

const routes: Routes = [
  {
    path: '',
    component: ImportfirstautotransPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportfirstautotransPageRoutingModule {}
