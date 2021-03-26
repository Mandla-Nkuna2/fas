import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuelconsumptionPageRoutingModule } from './fuelconsumption-routing.module';

import { FuelconsumptionPage } from './fuelconsumption.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuelconsumptionPageRoutingModule
  ],
  declarations: [FuelconsumptionPage]
})
export class FuelconsumptionPageModule {}
