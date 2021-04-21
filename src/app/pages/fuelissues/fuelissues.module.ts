import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuelissuesPageRoutingModule } from './fuelissues-routing.module';

import { FuelissuesPage } from './fuelissues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuelissuesPageRoutingModule
  ],
  declarations: [FuelissuesPage]
})
export class FuelissuesPageModule {}
