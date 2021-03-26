import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverslicensePageRoutingModule } from './driverslicense-routing.module';

import { DriverslicensePage } from './driverslicense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverslicensePageRoutingModule
  ],
  declarations: [DriverslicensePage]
})
export class DriverslicensePageModule {}
