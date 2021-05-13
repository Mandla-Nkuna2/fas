import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BowserPage } from './bowser.page';

const routes: Routes = [
  {
    path: '',
    component: BowserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BowserPageRoutingModule {}
