import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicetypesPage } from './servicetypes.page';

const routes: Routes = [
  {
    path: '',
    component: ServicetypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicetypesPageRoutingModule {}
