import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrafficfinePageRoutingModule } from './trafficfine-routing.module';

import { TrafficfinePage } from './trafficfine.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrafficfinePageRoutingModule,
    ComponentsModule,
    IonicSelectableModule,
  ],
  declarations: [TrafficfinePage]
})
export class TrafficfinePageModule {}
