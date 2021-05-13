import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostcentrePageRoutingModule } from './costcentre-routing.module';

import { CostcentrePage } from './costcentre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostcentrePageRoutingModule
  ],
  declarations: [CostcentrePage]
})
export class CostcentrePageModule {}
