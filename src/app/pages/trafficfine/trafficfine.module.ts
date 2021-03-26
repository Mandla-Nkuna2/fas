import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrafficfinePageRoutingModule } from './trafficfine-routing.module';

import { TrafficfinePage } from './trafficfine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrafficfinePageRoutingModule
  ],
  declarations: [TrafficfinePage]
})
export class TrafficfinePageModule {}
