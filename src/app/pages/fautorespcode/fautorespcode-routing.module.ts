import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FautorespcodePage } from './fautorespcode.page';

const routes: Routes = [
  {
    path: '',
    component: FautorespcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FautorespcodePageRoutingModule {}
