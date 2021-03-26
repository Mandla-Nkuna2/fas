import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthlyvehiclereportPageRoutingModule } from './monthlyvehiclereport-routing.module';

import { MonthlyvehiclereportPage } from './monthlyvehiclereport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthlyvehiclereportPageRoutingModule
  ],
  declarations: [MonthlyvehiclereportPage]
})
export class MonthlyvehiclereportPageModule {}
