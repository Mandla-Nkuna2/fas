import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffaudittrailPageRoutingModule } from './staffaudittrail-routing.module';

import { StaffaudittrailPage } from './staffaudittrail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffaudittrailPageRoutingModule
  ],
  declarations: [StaffaudittrailPage]
})
export class StaffaudittrailPageModule {}
