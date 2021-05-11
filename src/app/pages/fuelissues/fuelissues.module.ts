import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuelissuesPageRoutingModule } from './fuelissues-routing.module';

import { FuelissuesPage } from './fuelissues.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuelissuesPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule
  ],
  declarations: [FuelissuesPage]
})
export class FuelissuesPageModule {}
