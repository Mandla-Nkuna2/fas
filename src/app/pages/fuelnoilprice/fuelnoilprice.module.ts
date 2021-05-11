import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuelnoilpricePageRoutingModule } from './fuelnoilprice-routing.module';

import { FuelnoilpricePage } from './fuelnoilprice.page';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuelnoilpricePageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [FuelnoilpricePage]
})
export class FuelnoilpricePageModule {}
